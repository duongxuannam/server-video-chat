"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _firebaseAdmin = _interopRequireDefault(require("./firebaseAdmin"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const admin = _firebaseAdmin.default.admin();

class _DynamicValues {
  constructor() {
    this.FB_CODE = null;
    this.numberMessage = null;
  }

  init() {
    const db = admin.database();
    const refFBCode = db.ref('FB_CODE');
    const bindSetFBCode = (value) => this.setFBCode(value);
    refFBCode.on('value', function (snapshot) {
      bindSetFBCode(snapshot.val());
    });

    const refNumberMessage = db.ref('numberMessage');
    const bindSetNumberMessage = (value) => this.setNumberMessage(value);
    refNumberMessage.on('value', function (snapshot) {
      bindSetNumberMessage(snapshot.val());
    });
  }

  setFBCode(value) {
    this.FB_CODE = value;
  }
  setNumberMessage(value = 0) {
    this.numberMessage = value || 0;
  }

  setNumberMessageFirebase(value = 0) {
    this.numberMessage = value;

    const db = admin.database();
    const refNumberMessage = db.ref('numberMessage');
    refNumberMessage.set(value);
  }}


const DynamicValues = new _DynamicValues();var _default =

DynamicValues;exports.default = _default;