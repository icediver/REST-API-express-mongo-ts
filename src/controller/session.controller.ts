import { Request, Response } from 'express';
import config from 'config';
import { createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
  //Validate the user's password
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send('Invalid email or password');
  }
  // create a session
  const session = await createSession(user._id, req.get('user-agent') || '');

  
  // create an acces token
 
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get('accesTokenTtl') }, //15 minutes
  );
  
  // create a refresh token
  
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get('refreshTokenTtl') }, //15 minutes
  );
  console.log(accessToken, refreshToken)
  // return acces & refresh tokens
  return res.send({ accessToken, refreshToken });
}
