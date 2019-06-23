import { injectable } from 'inversify';
import { Controller, Get, Post } from 'inversify-restify-utils';
import restify from 'restify';
import { UsersService } from './users.service';

@Controller('/users')
@injectable()
class UsersController {

    private userService!: UsersService;
    constructor() {
        this.userService = new UsersService();
    }
    @Get('/get')
    public fetchUsersProfile(req: restify.Request): any {
        return this.userService.getUsers(req.body);
    }

    @Get('/get/:id')
    public fetchUserProfile(req: restify.Request): any {
        return this.userService.getUserId(req.params.id);
    }
}

export {UsersController};