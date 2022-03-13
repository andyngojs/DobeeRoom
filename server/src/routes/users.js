import express from 'express';
import { getUser, createUser } from '../app/controllers/UserController.js';

const route = express.Router();

route.get('/user', getUser);
route.post('/user', createUser);

export default route;