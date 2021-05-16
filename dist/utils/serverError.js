"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;class ServerError extends Error {
  constructor(message, code = 400) {
    super(message);
    Error.call(this);
    Error.captureStackTrace(this, ServerError);
    this.code = code;
  }}exports.default = ServerError;