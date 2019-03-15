import * as Koa from "koa";

function responseTime() {
  return async (ctx: Koa.Context, next: () => Promise<any>) => {
    console.log("Started tracking response time");
    const started = Date.now();
    await next();

    // once all middleware below completes, this continues
    const elapsed = `${Date.now() - started} ms`;
    console.log(`Response time for URL '${ctx.url}' is ${elapsed}`);
    ctx.set("X-ResponseTime", elapsed);
  };
}

export { responseTime };
