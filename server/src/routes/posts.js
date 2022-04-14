import express from 'express';
import {createPost, getPost} from "../app/controllers/PostController.js";

const route = express.Router();

route.get('/posts', getPost)
route.post('/post', createPost)

export default route
