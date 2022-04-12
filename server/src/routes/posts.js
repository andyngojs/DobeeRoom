import express from 'express';
import { getPost } from "../app/controllers/PostController.js";

const route = express.Router();

route.get('/posts', getPost)

export default route
