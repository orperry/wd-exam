const {getUsers} = require('../utils');

module.exports = async function (req, res, next) {
    const filter = req.query.filter || '';
    const users = await getUsers(filter);
    return res.json(users);
}
