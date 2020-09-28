const db = require('./core/database');
const SESSION = 1000 * 60 * 60 * 60;

async function getUserByEmail(email) {
    const users = db.users.filter(user => user.email === email);
    if (users.length === 0) {
        return null;
    }
    return users[0];
}

async function getUsers(filter) {
    filter = filter || '';
    const results = db.users.filter(it => it.name.includes(filter));
    return results;
}

module.exports = {getUserByEmail, getUsers, SESSION};
