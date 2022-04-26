import express from 'express'
import {searchPost} from "../app/controllers/SearchController.js";

const route = express.Router()

route.get('/search', searchPost)

export default route
