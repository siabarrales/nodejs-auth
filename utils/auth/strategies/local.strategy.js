const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const AuthService = require('./../../../services/auth.service.js');

const service = new AuthService();
const LocalStrategy = new Strategy(
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const user = await service.getUser(email, password);
      done(null, user);
    } catch (error) {
      done(error, false, { message: 'Incorrect email or password' });
    }
  }
);

module.exports = LocalStrategy;
