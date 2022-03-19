import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
      type: String,
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
        type: String,
        required: true,
        default: 0
    },
    phone: {
        type: String,
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
    },
    providerIn: {
        type: String,
        required: false
    }
}, { timestamps: true });

export const UserModel = mongoose.model('User', userSchema);
