"use strict";var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _services = require("./services");
var _routes = _interopRequireDefault(require("./routes"));
var _path = _interopRequireDefault(require("path"));
var _logger = _interopRequireDefault(require("./utils/logger"));
var _config = _interopRequireDefault(require("./config"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const app = (0, _express.default)();


const port = _config.default.PORT || 1995;

const http = require('http');
const server = http.Server(app);



if (process.env.NODE_ENV !== 'production') {
  app.use((0, _morgan.default)('dev'));
}

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({ extended: true }));



//ejs
app.set('views', _path.default.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(_express.default.static(__dirname + '/../front-end/build'));





(0, _services.settingConfig)(server, app);
app.use('/', _routes.default);
server.listen(port, () => _logger.default.info(`> Ready on port ${port}`));