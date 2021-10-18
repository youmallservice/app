import 'dotenv/config';

export default {
  secret: process.env.APP_AUTH_SECRET,
  expiresIn: '7d',
};
