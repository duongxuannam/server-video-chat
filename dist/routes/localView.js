"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _express = require("express");

const routes = (0, _express.Router)();


routes.get('/', async (req, res) => {
  const list = [
  { name: 'PHP' },
  { name: 'Ruby' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'dotNet' },
  { name: 'C#' },
  { name: 'Swift' },
  { name: 'Pascal' }];

  res.render('index', { title: 'Demo Ejs', list: list });
});

routes.get("/call/:room", (req, res) => {
  res.render("room", { roomId: req.param.room });
});var _default =

routes;exports.default = _default;