import { UserModel } from '../models/UserModel.js';

export const getUser = async (req, res) => {
        try {
                const users = await UserModel.find();
                res.status(200).json(users);
        } catch (err) {
                res.status(500).json({ message: err });
        }
};

export const createUser = async (req, res) => {
        try {
                const newUser = req.body;
                const user =  new UserModel(newUser);
                await user.save();
                res.status(200).json(user);
        } catch (err) {
                res.status(500).json({ message: err });
        }
};