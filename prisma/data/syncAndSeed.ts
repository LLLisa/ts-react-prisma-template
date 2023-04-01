import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { USER, DATABASE_NAME } = process.env;

const db = new Client({
  user: USER,
  host: 'localhost',
  database: DATABASE_NAME,
  port: 5432,
});

const syncAndSeed = async () => {
  try {
    console.log('Connecting to DB...');
    await db.connect();
    const { rows } = await db.query(
      `SELECT table_name FROM information_schema.tables WHERE table_schema='public';`
    );
    console.log(rows);
    await db.end();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

syncAndSeed();
