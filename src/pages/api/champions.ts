import { NextApiRequest, NextApiResponse } from 'next';
import { openDB } from '../../openDB';

export default async function getChampions(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();
  const champions = await db.all(`
    SELECT * 
    FROM Driver 
    WHERE titles > 0
    ORDER BY titles DESC, name ASC
  `);
  res.status(200).json(champions);
}
