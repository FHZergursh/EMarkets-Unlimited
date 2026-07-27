import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

export async function setupProductsDB() {
  try {
    console.log('Connection established');

    // Create a new table
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        productid SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        imageurl VARCHAR(1000),
        price DECIMAL(10, 2) NOT NULL,
        stock INT 
      );
    `;
    console.log('Finished creating table.');

  } catch (err) {
    console.error('Connection failed.', err);
  }
}
