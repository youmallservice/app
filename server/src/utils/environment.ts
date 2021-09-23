import 'dotenv/config';

export function isDevelopment(): boolean {
  const { NODE_ENV } = process.env;
  const KEY_DEVELOPMENT: string = 'development';

  return !!NODE_ENV && NODE_ENV === KEY_DEVELOPMENT;
}
