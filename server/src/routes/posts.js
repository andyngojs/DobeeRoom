import express from 'express';
import path from "path";
import multer from 'multer'
import {
    createPost,
    getPost,
    uploadFile,
    uploadFiles,
    getPostPending,
    getPostPublic, changeStatus, deletePost
} from "../app/controllers/PostController.js";

const router = express.Router();
const store = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'public/uploads/');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({ storage: store });

router.get('/posts', getPost);
router.post('/post', createPost);

router.get('/posts/pending', getPostPending);
router.get('/posts/public', getPostPublic);
router.post('/change-status', changeStatus);
router.post('/delete-post', deletePost);

router.post('/upload', upload.single('file-single'), uploadFile);
router.post('/uploads', upload.array('file-multiple', 12), uploadFiles);

export default router;
