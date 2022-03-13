import { UserModel } from '../models/UserModel.js';

export const getUser = async (req, res) => {
        try {
                const users = await UserModel.find();
                res.status(200).json(users);
        } catch (err) {
                console.log("Message: " ,err);
        }
};

export const createUser = (req, res) => {
        try {
                res.json({ message: 'success' });
        } catch (err) {
                console.log("Message: ", err);
        }
};