const {getUserByEmail, SESSION} = require('../utils');

module.exports = async function (req, res, next) {
    // read email and password from request
    const {email, password} = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
        // user not found
        return res.json({login: false});
    }
    if (user.password !== password) {
        // password not match
        return res.json({login: false});
    }
    // user logged in
    res.cookie('login', '1', {maxAge: SESSION});
    return res.json({login: true});
}
