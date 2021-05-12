import { Router } from 'express';
import users from './users';
import local from './localView';
import SocketService from 'services/socketService';
// import { verifyToken } from 'controllers/authController';
// import User from 'models/user';

const routes = Router();

// routes.use(verifyToken);


routes.use('/user', users);

routes.use('/local', local);


routes.use((err, req, res, next) => {
  if (err.name !== 'HttpError' || !err.errorCode) return next(err);
  res.status(err.errorCode).json({ message: err.message });
});


//test

routes.get("/test", (req, res) => {
  res.json({a:'ok'});
  SocketService.getIO().sockets.emit('joinRoom', 3123131231);
});


export default routes;
