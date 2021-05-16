"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _express = require("express");
var _users = _interopRequireDefault(require("./users"));
var _localView = _interopRequireDefault(require("./localView"));
var _socketService = _interopRequireDefault(require("../services/socketService"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// import { verifyToken } from 'controllers/authController';
// import User from 'models/user';

const routes = (0, _express.Router)();

// routes.use(verifyToken);


routes.use('/user', _users.default);

routes.use('/local', _localView.default);


routes.use((err, req, res, next) => {
  if (err.name !== 'HttpError' || !err.errorCode) return next(err);
  res.status(err.errorCode).json({ message: err.message });
});


//test

routes.get("/test", (req, res) => {
  res.json({ a: 'ok' });
  // SocketService.getIO().sockets.emit('joinRoom', 3123131231);
});var _default =


routes;exports.default = _default;