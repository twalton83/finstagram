import express from 'express';
import path from 'path';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import user from './routes/user';
import auth from './routes/auth';
import { resolve } from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: resolve(__dirname, '../.env') });

require('./passport');
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongo connection error'));

const app = express();

app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));

app.use('/routes', auth);
app.use('/user', passport.authenticate('jwt', { session: false }), user);

app.listen(process.env.EXPRESS_PORT, () =>
  console.log(
    `Express listening at http://localhost:${process.env.EXPRESS_PORT}`,
  ),
);
