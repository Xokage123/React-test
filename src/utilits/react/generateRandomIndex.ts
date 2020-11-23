import { assoc } from '../js/accos';

export const generateRandomString = () => Math.random().toString(36).substring(2,15);

export const assignId = assoc('id');

export const generateId = <O extends object>(obj: O) => assignId(obj, generateRandomString());