import server from './app';

const PORT: string = process.env.PORT || '3333';
const URL: string = process.env.URL || 'http://localhost';

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running in ${URL}:${PORT}`);
});
