import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type_room: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    addressHC: {
        type: String,
        required: true
    },
    price_room: {
        type: String,
        required: true
    },
    price_electron: {
        type: String,
        required: true
    },
    price_water: {
        type: String,
        required: true
    },
    area_room: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    utils: {
        type: Array
    },
    thumbnail_img: {
        type: String,
        required: true
    },
    detail_img: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    create_by: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const PostModel = mongoose.model('posts', postSchema)
