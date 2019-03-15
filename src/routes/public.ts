import * as Router from "koa-router";
import { HomeController } from "../controller";

const routerOpts: Router.IRouterOptions = {};
const router: Router = new Router(routerOpts);

router.get("home", "/", HomeController.index);

export { router };
