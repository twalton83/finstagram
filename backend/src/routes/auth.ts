const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/login', function (req: IRequest, res: IResponse, next: Function) {
  passport.authenticate(
    'local',
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

interface IResponse {
  status: Function;
  send: Function;
  json: Function;
}

interface IRequest {
  login: Function;
}

export default router;
