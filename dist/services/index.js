"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.settingConfig = void 0;var _i18n = _interopRequireDefault(require("i18n"));

var _firebaseAdmin = _interopRequireDefault(require("./firebaseAdmin"));
var _dynamicValues = _interopRequireDefault(require("./dynamicValues"));
var _socketService = _interopRequireDefault(require("./socketService"));
var _cors = require("./cors");

var _logger = _interopRequireDefault(require("../utils/logger"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import mongoose from 'mongoose';
// import configs from '../config';

const settingConfig = (server, app) => {
  _firebaseAdmin.default.init();
  _dynamicValues.default.init();
  (0, _cors.useCor)(app);
  // ScheduleService.startSendMessage();
  _socketService.default.start(server);


  //init multi language
  _i18n.default.configure({
    locales: ['en', 'vi'],
    directory: __dirname + '/languages',
    defaultLocale: 'vi',
    cookie: 'i18n' });



  // Connect MongoDB
  // mongoose.connect(configs.MONGO_URL, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true
  // }).then(() => logger.info('Database connected!') )
  //     .catch(err => logger.error('err' + err));
  // // mongoose.connect(
  // //     'mongodb://duongxuannam:duongxuannam@datalake0-6ibyt.a.query.mongodb.net/
  // // TryYourBest?ssl=true&authSource=admin',
  // //     { useNewUrlParser: true });
  // const db = mongoose.connection;
  // db.on('open', () => {
  //     logger.info('DB connected');
  // });

  // db.on('error', (err) => logger.error(err));

  // keep server running
  process.on('uncaughtException', (err) =>
  _logger.default.error('uncaughtException: ' + err));

  process.on('unhandledRejection', (err) =>
  _logger.default.error('unhandledRejection: ' + err));

};exports.settingConfig = settingConfig;