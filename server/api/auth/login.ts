import { defineEventHandler, readBody, setCookie, createError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, password } = body;
    console.log(username, body);
    return new Response(JSON.stringify("success"), { status: 200 });
  } catch (err) {
    console.log(err);
  }
});
