import handler from '../../handler';
import { openDB } from '../../openDB';

export default handler.get(async (req, res) => {
  const db = await openDB();
  const champions = await db.all(`
    SELECT * 
    FROM Driver 
    WHERE titles > 0
    ORDER BY titles DESC, name ASC
  `);
  res.status(200).json(champions);
}).post((req, res) => {
  throw new Error('Ups something happened! Sorry!');
});
