import { Router } from 'express';
import * as ctrl from '../controllers';
import * as mw from '../middlewares';
import * as schemas from '../schemas';

export const usersRouter: Router = Router();

usersRouter.post('', mw.bodySerializer(schemas.userPayload), ctrl.createUserControler);
usersRouter.get('', () => console.log('R-Read realizando'));
usersRouter.patch('/:id', () => console.log('U-Update realizando'));
usersRouter.delete('/:id', () => console.log('D-Delete realizando'));
