const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const passport = require('passport');
const UserModel = require('./models/User');

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'XQ7MfA2@^Az@3D',
    },
    function (jwtPayload: IJWTPayload, cb: Function) {
      return UserModel.findOneById(jwtPayload.id)
        .then((user: Object) => {
          return cb(null, user);
        })
        .catch((err: Error) => {
          return cb(err);
        });
    },
  ),
);

interface IJWTPayload {
  id: Number;
}

export {};
