import mongoose from "mongoose";

const SavedListSchema = new mongoose.Schema({
    id_user: {
        type: String,
        require: true,
        default: ''
    },
    saved_posts: {
        type: Array,
        require: false,
        default: []
    }
}, { timestamps: true})

const SavedListModel = mongoose.model('saved_lists', SavedListSchema);

export default SavedListModel;
