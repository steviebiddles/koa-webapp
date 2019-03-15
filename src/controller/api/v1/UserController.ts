import { classToPlain } from "class-transformer";
import { BaseContext } from "koa";
import { getRepository, Repository } from "typeorm";
import User from "../../../entity/User";

export default class UserController {

  /**
   * Get all users
   *
   * @param ctx
   */
  public static async getUsers(ctx: BaseContext) {
    const userRepo: Repository<User> = getRepository(User);
    const users: User[] = await userRepo.find();

    ctx.status = 200;
    ctx.body = {
      data: {
        users: classToPlain(users)
      }
    };
  }

  /**
   * Get user
   *
   * @param ctx
   */
  public static async getUser(ctx: BaseContext) {
    const userRepo: Repository<User> = getRepository(User);
    const user: User = await userRepo.findOne(1);

    ctx.status = 200;
    ctx.body = {
      data: {
        users: classToPlain(user)
      }
    };
  }
}
