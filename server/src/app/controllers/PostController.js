import lodash from "lodash";
import {PostModel} from "../models/PostModel.js";
import SavedListModel from "../models/SavedListModel.js";
import {UserModel} from "../models/UserModel.js";

// Trang client và trang admin
export async function getPost(req, res) {
    try {
        const users = await UserModel.find();
        const posts = await PostModel.find();
        const postCopy = [...posts];
        const newPosts = postCopy.map((post) => {
            const author = users.find((item) => item._id.toString() === post.created_by  )
            return {
                ...post._doc,
                created_by: author.name,
                created_byID: author._id.toString()
            }
        })
        res.status(200).json(newPosts)
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

// trang client
export async function createPost(req, res) {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();
        res.json({ message: 'created successfully', post: req.body })
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

export function uploadFile(req, res) {
    try {
        req.body = req.file.path.split('\\').slice(1).join('/');
        res.json({ message: 'uploaded successfully', data: req.body });
    } catch (err) {
        res.json({ message: err });
    }
}

export function uploadFiles(req, res) {
    try {
        const data = [];
        req.files.map((file) => {
            req.body = file.path.split('\\').slice(1).join('/');
            data.push(req.body);
        });
        res.json({ message: 'uploaded successfully', data: data});
    } catch (err) {
        res.json({ message: err });
    }
}

export const getPostPending = async (req, res) => {
    try {
        const postPending = await PostModel.find({ status: 0, created_by: req.body.idUser });
        res.json({ message: 'successfully', data: postPending });
    } catch (err) {
        res.json({ message: err });
    }
}
export const getPostPublic = async (req, res) => {
    try {
        const postPublic = await PostModel.find({ status: 1 });
        const users = await UserModel.find()
        const listSaved = await SavedListModel.find({ id_user: req.body.idUser })
        const postPublicId = postPublic.map((post) => (post._id.toString()))
        const postSavedId = listSaved.map((post) => post.saved_posts)
        const postSaved = lodash.intersection(postPublicId, ...postSavedId)
        const newPostPublic = postPublic.map((post) => {
            const author = users.find(item => item._id.toString() === post.created_by )
            if (postSaved.includes(post._id.toString()) && postSavedId.length > 0) {
                return {
                    ...post._doc,
                    isSaved: true,
                    created_by: author.name,
                    created_byID: author._id.toString()
                }
            } else {
                return {
                    ...post._doc,
                    created_by: author.name,
                    created_byID: author._id.toString()
                }
            }
        })
        res.json({ message: 'successfully', data: newPostPublic });
    } catch (err) {
        res.json({ message: err });
    }
}

// [Feature] Trang Admin
export const getPublicPost = async (req, res) => {
    try {
        const posts = await PostModel.find({ status: 1 })
        res.json(posts)
    } catch (err) {
        res.json({ message: err });
    }
}

export const changeStatus = async (req, res) => {
    try {
        const newStatus = req.body.status
        const findPost = await PostModel.findOneAndUpdate({ _id: req.body.idPost }, { status: newStatus }, {
            new: true
        });
        res.json({ message: 'successfully', data: findPost });
    } catch (err) {
        res.json({ message: err });
    }
}

export const deletePost = async (req, res) => {
    try {
        await PostModel.findOneAndDelete({ _id: req.body.idPost });
        res.json({ message: 'success' })
    } catch (err) {
        res.json({ message: err });
    }
}