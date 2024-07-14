import OpenAI from "openai";

const openai = new OpenAI();

export interface bodySchema {
  "userId": string;
  "talkLog": {
    "speaker": '看護師' | '患者',
    "message": string
  }[]
}

const samplePatientNames = [
  '渡邊',
  '西村',
  '星島',
  '中川',
  '吉田'
]

const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * samplePatientNames.length);
  return samplePatientNames[randomIndex];
};

const systemPrompt = `
次の患者と看護師の会話履歴を、以下の観点からまとめてJSONで出力してください。
- いつから症状が始まったか: fromWhen
- どういうときに発症をするか: how
- どの程度の症状か: amountOfPain
- その他: others
JSONは{
"fromWhen": string,
"how:: string,
"amountOfPain": string,
"others": string
}
という形式にしてください
`

export const summarizer = async (body: bodySchema) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "system", "content": systemPrompt},
      {"role": "user", "content": JSON.stringify(body)},
    ],
    model: "gpt-4o",
    response_format: { type: "json_object" }
  });

  console.log(completion.choices[0]);
  const result = completion.choices[0].message?.content;
  const selectedName = getRandomName();

  if(result) {
    const resObj = {
      ...body,
      summary: JSON.parse(result),
      displayName: selectedName
    }
    console.log(resObj);
    return resObj
  } else {
    console.error("No content received from OpenAI");
  }
}