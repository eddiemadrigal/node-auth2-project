const express = require('express');

// const registerRouter = require('../routes/register/register-router');
// const loginRouter = require('../routes/login/login-router');
// const usersRouter = require('../routes/users/users-router');

const server = express();

server.use(express.json());

// server.use('/api/register', registerRouter);
// server.use('/api/login', loginRouter);
// server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('API up ...');
});

module.exports = server;