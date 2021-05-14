import User from '../models/User';
import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import bcrypt from 'bcryptjs';

const authRouter = Router();

authRouter.post('/signup', (req: Request, res: Response, next: Function) => {
  bcrypt.hash(req.body.password, 10, (err, salt) => {
    if (err) {
      return err;
    } else {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
      }).save((err) => {
        if (err) {
          return next(err);
        }
        res.status(200);
      });
    }
  });
});

authRouter.post('/login', (req: Request, res: Response, next: Function) => {
  passport.authenticate(
    'jwt',
    { session: false },
    (err: Error, user: Object, info: Object) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user,
        });
      }
      req.login(user, { session: false }, (err: Error) => {
        if (err) {
          res.send(err);
        }
        // generate a signed json web token with the contents of user object and return it in the response

        const token = jwt.sign(user, process.env.SECRET);
        return res.json({ user, token });
      });
    },
  )(req, res);
});

export default authRouter;
