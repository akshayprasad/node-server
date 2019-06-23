import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-restify-utils';
import { UsersController } from '../modules/users/users.controller';

const container = new Container();

container.bind<interfaces.Controller>(TYPE.Controller).to(UsersController).whenTargetNamed('UsersController');

export {container};