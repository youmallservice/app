import { UserToken } from '../src/app/models/User';

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    // eslint-disable-next-line no-unused-vars
    interface Request {
      user?: UserToken;
    }
  }
}
