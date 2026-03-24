import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    const { name, fone } = req.body || {};

    if (!name || !fone) {
      return res.status(400).send('Поля не заполнены');
    }

    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO leads (name, phone)
      VALUES (${name}, ${fone})
    `;

    return res.redirect(302, '/thanks.html');
  } catch (error) {
    console.error('DB Error:', error);
    return res.status(500).send(`Ошибка сервера: ${error.message}`);
  }
}