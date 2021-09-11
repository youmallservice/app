import server from './app';

const PORT: string = process.env.PORT || '3333';

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running in http://localhost:${PORT}`);
});
