import {PostModel} from "../models/PostModel.js";

export async function getPost(req, res) {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

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
        const postPending = await PostModel.find({ status: 0 });
        res.json({ message: 'successfully', data: postPending });
    } catch (err) {
        res.json({ message: err });
    }
}
export const getPostPublic = async (req, res) => {
    try {
        const postPublic = await PostModel.find({ status: 1 });
        res.json({ message: 'successfully', data: postPublic });
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
        const oldPost = await PostModel.findOneAndDelete({ _id: req.body.idPost });
        res.json(oldPost)
    } catch (err) {
        res.json({ message: err });
    }
}