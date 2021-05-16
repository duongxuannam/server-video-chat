"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.timeRule = exports.fileNameRule = exports.phoneRule = exports.usernameRule = exports.fullNameRule = exports.emailRule = void 0;const emailRule = new RegExp(
/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
'i');
// eslint-disable-line
exports.emailRule = emailRule;const fullNameRule = new RegExp(
/^[^\^$,`~.|?!@#%^&*\-+={}\\\[\]<>]+$/,
'i');
// eslint-disable-line
exports.fullNameRule = fullNameRule;
const usernameRule = new RegExp(/^[a-zA-Z0-9]+$/, 'i');exports.usernameRule = usernameRule;

const phoneRule = new RegExp(
/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/,
'i');
// eslint-disable-line
exports.phoneRule = phoneRule;
const fileNameRule = new RegExp(/http.*?com./);exports.fileNameRule = fileNameRule;

const timeRule = new RegExp(
/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/);exports.timeRule = timeRule;