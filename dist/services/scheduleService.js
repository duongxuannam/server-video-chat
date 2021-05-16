"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cron = require("cron");
var _request = _interopRequireDefault(require("request"));
var _logger = _interopRequireDefault(require("../utils/logger"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const sendMessage = async () => {
  try {
    // const number = DynamicValues.numberMessage;
    // const msg = msgData[number];
    // await sendMessageWithAppState(msg);
    // DynamicValues.setNumberMessageFirebase(number + 1);
  } catch (e) {
    _logger.default.error(e);
  }
};

const wakeUp = () => {
  (0, _request.default)('https://apimongo.herokuapp.com/wakeUp', function (
  error,
  response,
  body)
  {
    if (!error && response.statusCode == 200) {
      _logger.default.error(body); // Print the google web page.
    }
  });
};

class _ScheduleService {
  constructor() {
    this.sendMessage = new _cron.CronJob(
    '00 29 05 * * *',
    //   '*/30 * * * * *',
    sendMessage,
    null,
    false,
    'Asia/Ho_Chi_Minh');


    this.wakeUp = new _cron.CronJob(
    //   '* * * * * *',
    '0 */28 * * * *',
    wakeUp,
    null,
    false,
    'Asia/Ho_Chi_Minh');

  }

  startSendMessage() {
    this.sendMessage.start();
    this.wakeUp.start();
  }}


const ScheduleService = new _ScheduleService();var _default =

ScheduleService;exports.default = _default;