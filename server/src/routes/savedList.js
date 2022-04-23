import express from 'express';
import { getSavedLists } from '../app/controllers/SavedListController.js';

const router = express.Router()

router.get('/saved_lists', getSavedLists);

export default router;

