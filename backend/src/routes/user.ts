const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req: IRequest, res: IResponse, next: Function) {
  res.send('respond with a resource');
});

/* GET user profile. */
router.get(
  '/profile',
  function (req: IRequest, res: IResponse, next: Function) {
    res.send(req.user);
  },
);

interface IResponse {
  status: Function;
  send: Function;
  json: Function;
}

interface IRequest {
  login: Function;
  user: Object;
}

export default router;
