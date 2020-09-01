const app = require('./core/init');
const loginRoute = require('./routes/login');
const usersRoute = require('./routes/users');
const {loginOnlyRoute} = require('./middleware');

// login action
app.post('/login', loginRoute);

// users action
app.get('/users', loginOnlyRoute, usersRoute);


app.listen(3000, '0.0.0.0', () => {
    console.log('server is running');
});
