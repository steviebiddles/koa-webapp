import { BaseContext } from "koa";

export default class HomeController {
  public static async index(ctx: BaseContext) {
      ctx.body = "Hello World! Homepage :-)";
  }
}
