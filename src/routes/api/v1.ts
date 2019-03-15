import * as Router from 'koa-router';
import {
    UserController
} from '../../controller';

const routerOpts: Router.IRouterOptions = {
    prefix: '/api/v1',
};
const router: Router = new Router(routerOpts);

// User routes
router.get('get_users', '/users', UserController.getUsers);
router.get('get_user', '/users/:id', UserController.getUser);

export { router };
