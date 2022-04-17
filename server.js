import Koa from "koa";
import KoaRouter from "koa-router";
import axios from "axios";
import cors from "@koa/cors";
import json from "koa-json";

const app = new Koa();
const router = new KoaRouter();

app.use(cors());
app.use(json());
app.use(router.routes()).use(router.allowedMethods())

router.get('/', async (ctx) => {
  return ctx.body = "Server is up an running on port 3001"
})

router.get('/blog', async (ctx) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(({ data }) => {
    ctx.body = data;
  })
  .catch(e => console.log(e))
})

app.listen(3001, () => console.log("Server is listening on port 3001"));