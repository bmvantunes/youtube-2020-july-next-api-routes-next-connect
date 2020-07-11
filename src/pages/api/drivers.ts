import { NextApiRequest, NextApiResponse } from 'next';
import { openDB } from '../../openDB';

export default async function getDrivers(req: NextApiRequest, res: NextApiResponse) {  
  switch (req.method) {
    case 'GET': {
      const db = await openDB();
      const allDrivers = await db.all(`SELECT * FROM Driver`);
      res.status(200).json(allDrivers);
      break;
    }
    case 'POST': {
      const db = await openDB();
      const { lastID } = await db.run(
        'INSERT INTO Driver (name, titles) values(?,?)',
        req.body.name,
        req.body.titles
      );

      res.status(201).json({ ...req.body, id: lastID });
      break;
    }
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
