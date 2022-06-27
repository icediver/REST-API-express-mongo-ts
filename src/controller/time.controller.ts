import { Request, Response } from 'express';
import config from 'config';
import { createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createTimeHandler(req: Request, res: Response) {
 console.log('test')
}