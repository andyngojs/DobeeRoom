import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: false,
    },
    address: {
        type: String,
        required: false
    },
    university: {
        type: String,
        required: false,
        default: ''
    },
    accessToken: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const UserModel = mongoose.model('User', userSchema);
