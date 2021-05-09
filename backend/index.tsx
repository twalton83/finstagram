const express = require("express");
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI,  { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongo connection error'));

const app = express();


app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

const User = mongoose.model(
  'User',
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  }),
);

passport.use(
  new LocalStrategy((username : string, password : string, done: Function) => {
    User.findOne({ username: username }, (err : object, user : User) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    });
  }),
);

interface User {
  password: string
}

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `Express listening at http://localhost:${process.env.EXPRESS_PORT}`
  )
);
