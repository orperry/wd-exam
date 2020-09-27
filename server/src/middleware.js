
function loginOnlyRoute(req, res, next) {
    console.log(req.cookies.login);
    if (req.cookies && req.cookies.login && req.cookies.login === '1') {
        // is logged in
        next();
    } else {
        // not logged in
        next(new Error('need to login first'));
    }
}

module.exports = {loginOnlyRoute};
