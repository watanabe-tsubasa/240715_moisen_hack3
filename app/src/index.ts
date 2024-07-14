import { Elysia, t } from "elysia";
import { cors } from '@elysiajs/cors'

const patientLogSchema = t.Object({
  userId: t.String(),
  talkLog: t.Array(t.Object({
    speaker: t.Union([t.Literal('看護師'), t.Literal('患者')]),
    message: t.String()
  }))
})

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .get("/json", {hello: 'world'})
  .get('/id/:id', ({ params: { id } }) => id)
  .post('/', ({ body }) => {
    // ここでbodyを使用して必要な処理を行います
    console.log('Received patient log:', body)
    return { success: true, message: 'Patient log received' }
  }, {
    body: patientLogSchema,
    response: t.Object({
      success: t.Boolean(),
      message: t.String()
    })
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}: &{test}`
);
