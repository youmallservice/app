import { createConnection, Connection } from 'typeorm';
import 'dotenv/config';

class Database {
  constructor() {
    this.startConnection();
  }

  private async startConnection(): Promise<void> {
    try {
      const connection: Connection = await createConnection(
        process.env.NODE_ENV as string
      );

      connection.runMigrations();
    } catch (err) {
      // eslint-disable-next-line
      console.log('Server stopped due to database problems.');
      process.exit();
    }
  }
}

export default new Database();
