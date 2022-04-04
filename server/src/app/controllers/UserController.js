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
        const newUser = req.body;
        const userCurrent = await UserModel.find({ email: newUser.email, providerId: newUser.providerId })
        console.log(!userCurrent)
        if (!userCurrent) {
                const user = new UserModel(req.body);
                await user.save();
                res.json({ message: 'successfully' })
        } else {
                res.json({ message: 'Failure' })
        }
};