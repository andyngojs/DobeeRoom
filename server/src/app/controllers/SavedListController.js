import lodash from "lodash";
import SavedListModel from "../models/SavedListModel.js";
import {PostModel} from "../models/PostModel.js";

export async function getSavedLists(req, res) {
    try {
        const posts = await PostModel.find()
        const savedLists = await SavedListModel.findOne({ id_user: req.body.idUser })
        const savedPost = savedLists.saved_posts.map((id) => {
            return lodash.find(posts, (p) => p._id.toString() === id )
        })
        res.status(200).json({ message: 'Successfully', saved_list: savedPost })
    } catch (e) {
        res.status(500).json({ message: 'Failure' })
    }
}

export async function savePost(req, res) {
    try {
        const dataReq = req.body
        const savedListUser = await SavedListModel.findOne({ id_user: dataReq.id_user });
        if (savedListUser) {
            savedListUser.saved_posts.push(dataReq.id_post);
            await savedListUser.save();
            res.status(200).json(savedListUser)
        } else {
            const savedLists = []
            savedLists.push(dataReq.id_post);
            const newSavedList = new SavedListModel({ id_user: dataReq.id_user, saved_posts: savedLists  })
            await newSavedList.save();
            res.status(200).json(newSavedList)
        }
    } catch (e) {
        res.status(500).json({ message: 'Failure' })
    }
}

export async function deleteSavedPost(req, res) {
    try {
        const data = req.body
        const savedListUser = await SavedListModel.findOne({ id_user: data.id_user });
        savedListUser.saved_posts  = savedListUser.saved_posts.filter((item) => item !== data.id_post );
        await savedListUser.save()
        res.status(200).json({ message: 'success' })
    } catch (e) {
        res.status(500).json({ message: 'Failure' })
    }
}