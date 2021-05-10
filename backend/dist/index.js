const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModel = require('./models/User');
const user = require('./routes/user');
const auth = require('./routes/auth');
require('./passport');
require('dotenv').config({ path: __dirname + '../.env' });
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));
const app = express();
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));

const User = mongoose.model(
  'User',
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  }),
);
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, cb) {
      return UserModel.findOne({ email, password })
        .then((user) => {
          if (!user) {
            return cb(null, false, { message: 'Incorrect email or password.' });
          }
          return cb(null, user, { message: 'Logged In Successfully' });
        })
        .catch((err) => cb(err));
    },
  ),
);
app.use('/auth', auth);
app.use('/user', passport.authenticate('jwt', { session: false }), user);
app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `Express listening at http://localhost:${process.env.EXPRESS_PORT}`,
  ),
);
