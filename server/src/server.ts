import 'dotenv/config';

import server from './app';
import { isDevelopment } from './utils/environment';

const PORT: string = process.env.PORT || '3333';
const URL: string = process.env.URL || 'http://localhost';
const VERSION: string = process.env.VERSION || 'v1';

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running in ${URL}:${PORT}/api/${VERSION}`);

  if (isDevelopment()) {
    // eslint-disable-next-line
    console.log(`Documentation in ${URL}:${PORT}/docs/index.html`);
  }
});
