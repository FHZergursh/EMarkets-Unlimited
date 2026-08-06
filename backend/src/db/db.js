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

    await sql`
      CREATE TABLE IF NOT EXISTS users (
        userid SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(500) NOT NULL

      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS reviews (
        reviewid SERIAL PRIMARY KEY,
        productid INT,
        FOREIGN KEY (productid) REFERENCES products(productid),
        content VARCHAR(1000) NOT NULL,
        starrating INT, 
        createdat TIMESTAMP NOT NULL

      );
    `;


    console.log('Finished initialising table.');

  } catch (err) {
    console.error('Connection failed.', err);
  }
}
