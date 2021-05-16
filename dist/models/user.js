"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = _interopRequireWildcard(require("mongoose"));
var _constants = require("../utils/constants");

var regexp = _interopRequireWildcard(require("../utils/regexp"));function _getRequireWildcardCache(nodeInterop) {if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function (nodeInterop) {return nodeInterop ? cacheNodeInterop : cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj, nodeInterop) {if (!nodeInterop && obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

// Define schema user
const userSchema = new _mongoose.Schema(
{
  role: { type: String, default: _constants.ROLES.USER },
  username: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  password: { type: String, required: true, select: false },
  email: { type: String },
  phone: { type: String },
  gender: { type: String },
  address: { type: String },
  avatar: { type: String },
  facebookID: { type: String, default: null },
  active: { type: Boolean, default: true },
  level: { type: String, default: _constants.LEVELS.silver.name },
  point: { type: Number, default: 0 },



  name: { type: String, required: true } });



// Hash password before save
// userSchema.pre('save', function(next) {
//   const user = this;
//   user.phone = user.phone ? user.phone.replace(/ /g, '') : '';
//   if (user.isNew || user.isModified('password')) {
//     // Create member code
//     if (user.isNew) {
//       user.memberCode = makeMemberCode();
//     }

//     bcrypt.genSalt((err, salt) => {
//       if (err) return next(err);

//       bcrypt.hash(user.password, salt, (err, hashedPassword) => {
//         if (err) return next(err);

//         user.password = hashedPassword;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });
var _default =

_mongoose.default.model('user', userSchema);exports.default = _default;