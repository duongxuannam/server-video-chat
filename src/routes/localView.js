import { Router } from 'express';

const routes = Router();


routes.get('/', async (req, res) => {
    const list = [
      {name: 'PHP'},
      {name: 'Ruby'},
      {name: 'Java'},
      {name: 'Python'},
      {name: 'dotNet'},
      {name: 'C#'},
      {name: 'Swift'},
      {name: 'Pascal'}
  ];
  res.render('index', { title: 'Demo Ejs', list: list });
  });

  routes.get("/call/:room", (req, res) => {
    res.render("room", { roomId: req.param.room });
  });

export default routes;