"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.useCor = void 0;var _cors = _interopRequireDefault(require("cors"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const useCor = (app) => {
  app.use((0, _cors.default)());

  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
    next();
  });

};exports.useCor = useCor;