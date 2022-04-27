import express from 'express';
import {getUser, createUser, getUserByID} from '../app/controllers/UserController.js';

const route = express.Router();

route.get('/user', getUser);
route.post('/user', createUser);

route.post('/getUser', getUserByID)

export default route;