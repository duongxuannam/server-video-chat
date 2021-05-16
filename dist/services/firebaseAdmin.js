"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));
var _serviceAccountKey = _interopRequireDefault(require("../../serviceAccountKey.json"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class _FirebaseAdmin {
  constructor() {}
  init() {
    _firebaseAdmin.default.initializeApp({
      credential: _firebaseAdmin.default.credential.cert(_serviceAccountKey.default),
      databaseURL: 'https://playhard-2c8eb.firebaseio.com' });

  }
  admin() {
    return _firebaseAdmin.default;
  }}


const FirebaseAdmin = new _FirebaseAdmin();var _default =

FirebaseAdmin;exports.default = _default;