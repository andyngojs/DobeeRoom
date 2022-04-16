import express from 'express';
import multer from 'multer'
import {createPost, getPost, uploadFile} from "../app/controllers/PostController.js";

const router = express.Router();
const upload = multer({ dest: 'public/uploads/'});

router.get('/posts', getPost);
router.post('/post', createPost);

router.post('/upload', upload.single('file-single'), uploadFile)

export default router
