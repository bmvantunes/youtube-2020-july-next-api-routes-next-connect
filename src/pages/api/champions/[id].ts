import getHandler from '../../../handler';

export default getHandler().get(async (req, res) => {
    res.end('with id ' + req.query.id);
});