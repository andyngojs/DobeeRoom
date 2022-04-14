import {PostModel} from "../models/PostModel.js";

export async function getPost(req, res) {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export async function createPost(req, res) {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save()
        res.json({ message: 'created successfully', post: req.body })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
