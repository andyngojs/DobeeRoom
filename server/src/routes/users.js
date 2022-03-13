import express from 'express';
import { getUser } from '../app/controllers/UserController.js';

const route = express.Router();

route.get('/user', getUser);

export default route;