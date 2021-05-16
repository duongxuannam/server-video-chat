"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.LEVELS = exports.NAME_LEVELS = exports.GENDERS = exports.ROLES = void 0;const ROLES = {
  ADMIN: 'admin',
  USER: 'user' };exports.ROLES = ROLES;


const GENDERS = {
  MALE: 'male',
  FEMALE: 'female',
  GAY: 'gay' };exports.GENDERS = GENDERS;


const NAME_LEVELS = {
  DIAMOND: 'diamond',
  GOLD: 'gold',
  TITAN: 'titan',
  SILVER: 'silver' };exports.NAME_LEVELS = NAME_LEVELS;


const LEVELS = {
  diamond: {
    name: 'diamond',
    xPoint: 2,
    scopeMin: 3000 },

  gold: {
    name: 'gold',
    xPoint: 2,
    scopeMin: 1500,
    scopeMax: 3000 },

  titan: {
    name: 'titan',
    xPoint: 1.5,
    scopeMin: 500,
    scopeMax: 1500 },

  silver: {
    name: 'silver',
    xPoint: 1,
    scopeMin: 0,
    scopeMax: 500 } };exports.LEVELS = LEVELS;