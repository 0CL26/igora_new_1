import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method not allowed');
  }

  try {
    const { rows } = await sql`
      SELECT * FROM houses
      ORDER BY created_at DESC
    `;

    return res.status(200).json(rows);
  } catch (error) {
    console.error('DB Error:', error);
    return res.status(500).send('Ошибка сервера');
  }
}
