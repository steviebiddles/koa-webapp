import * as HttpStatus from "http-status-codes";
import * as Koa from "koa";
import "reflect-metadata";
import { responseTime } from "./middleware/response-time";
import { router as apiRouter } from "./routes/api/v1";
import { router } from "./routes/public";

const app: Koa = new Koa();

// Generic error handling middleware.
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status =
      error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit("error", error, ctx);
  }
});

app.use(responseTime());
app.use(router.routes()).use(router.allowedMethods());
app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

app.on("error", console.error);

export default app;
