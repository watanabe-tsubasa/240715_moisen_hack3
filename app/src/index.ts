import { Elysia, t } from "elysia";
import { cors } from '@elysiajs/cors';
import { summarizer } from "./summarizer";

export const patientLogSchema = t.Object({
  userId: t.String(),
  talkLog: t.Array(t.Object({
    speaker: t.Union([t.Literal('看護師'), t.Literal('患者')]),
    message: t.String()
  }))
});

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .get("/json", {hello: 'world'})
  .get('/id/:id', ({ params: { id } }) => id)
  .post('/', async ({ body }) => {
    try {
      console.log('Received patient log:', body);
      const resObj = await summarizer(body);
      console.log('success to POST:', resObj);
      // DBにPOST
      return { success: true, message: 'Patient log received', data: resObj };
    } catch (error) {
      console.error("Error in POST /:", error);
      return { success: false, message: 'Failed to process patient log' };
    }
  }, {
    body: patientLogSchema,
    response: t.Object({
      success: t.Boolean(),
      message: t.String(),
      data: t.Optional(t.Any())
    })
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
