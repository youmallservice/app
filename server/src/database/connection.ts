import { createConnection, Connection } from 'typeorm';

class Database {
  constructor() {
    this.startConnection();
  }

  private async startConnection(): Promise<void> {
    try {
      const connection: Connection = await createConnection();

      connection.runMigrations();
    } catch (err) {
      // eslint-disable-next-line
      console.log('Server stopped due to database problems.');
      process.exit();
    }
  }
}

export default new Database();
