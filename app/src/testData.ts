import { bodySchema } from "./summarizer";

export const testData: bodySchema = {
  userId: "67359101",
  talkLog: [
    {
      speaker: "患者",
      message: "腰が痛いです",
    },
    {
      speaker: "看護師",
      message: "そうなんですね、腰が痛いのは辛いですよね。いつからその症状が始まりましたか？",
    },
    {
      speaker: "患者",
      message: "腰が痛いです",
    },
    {
      speaker: "看護師",
      message: "それはお辛いですね。腰の痛みはいつから始まりましたか？",
    },
    {
      speaker: "患者",
      message: "おととい ぐらいです",
    },
    {
      speaker: "看護師",
      message: "おとといからですね。具体的にどういうときに腰の痛みが強くなりますか？例えば、立ち上がるときや座っているときなど。",
    },
    {
      speaker: "患者",
      message: "座ってる時が痛いです",
    },
    {
      speaker: "看護師",
      message: "座っているときに痛みが強くなるんですね。痛みの程度はどのくらいでしょうか？例えば、軽い痛みから強い痛みまで、10段階で評価するとどのくらいですか？",
    },
    {
      speaker: "患者",
      message: "5ぐらいです",
    },
    {
      speaker: "看護師",
      message: "なるほど、痛みの程度は5くらいですね。他に何か気になる症状はありますか？例えば、しびれや発熱など。",
    },
    {
      speaker: "患者",
      message: "しびれてます",
    },
    {
      speaker: "看護師",
      message: "しびれもあるんですね。それはどの部分に感じますか？例えば、脚やお尻など具体的な場所を教えていただけますか？",
    }
  ],
};
