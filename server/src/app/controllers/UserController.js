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
        const userCurrent = await UserModel.findOne({ email: newUser.email, providerId: newUser.providerId });
        if (userCurrent) {
                res.json({ message: 'user existed', data: userCurrent })
        } else {
                res.json({ message: 'user not exist', data: newUser })
                const user = new UserModel(req.body);
                await user.save();
        }
};

export const getUserByID = async (req, res) => {
        try {
                const user = await UserModel.findOne({ _id: req.body.idUser })
                res.status(200).json({ message: 'success', user: user })
        } catch (e) {
                res.status(500).json({ message: 'Failure' })
        }
}