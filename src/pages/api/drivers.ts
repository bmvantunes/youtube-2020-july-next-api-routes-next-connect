import handler from '../../handler';
import { openDB } from '../../openDB';

export default handler
  .get(async (req, res) => {
    const db = await openDB();
    const allDrivers = await db.all(`SELECT * FROM Driver`);
    res.status(200).json({name: req.username, userId: req.userId, allDrivers});
  })
  .post(async (req, res) => {
    if(req.userId !== 1234) {
      res.status(401).json({message: 'Sorry you are not 1234'});
      return;
    }

    const db = await openDB();
    const { lastID } = await db.run(
      'INSERT INTO Driver (name, titles) values(?,?)',
      req.body.name,
      req.body.titles
    );

    res.status(201).json({ ...req.body, id: lastID });
  });
