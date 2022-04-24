import express from 'express';
import {deleteSavedPost, getSavedLists, savePost} from '../app/controllers/SavedListController.js';

const router = express.Router()

router.post('/saved_lists', getSavedLists);
router.post('/saved_post', savePost);

router.post('/delete_post', deleteSavedPost)

export default router;

