import {PostModel} from "../models/PostModel.js";
import {UserModel} from "../models/UserModel.js";

export const searchPost = async (req, res) => {
    try {
        const query = req.query
        const postPublic = await PostModel.find({ status: 1  })
        const addressQuery = `${query.ward}, ${query.dict}, ${query.city}`;
        const result = postPublic.filter((post) => post.area_room === query.area || post.price_room === query.p || post.address === addressQuery )
        const users = await UserModel.find()
        const newResult = result.map((post) => {
            const author = users.find(item => item._id.toString() === post.created_by );
            return {
                ...post._doc,
                created_by: author.name,
                created_byID: author._id.toString()
            }
        })
        res.status(200).json({ message: 'successfully', data: newResult })
    } catch (e) {
        res.status(500).json({ message: 'failure!' })
    }
}