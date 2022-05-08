import UserData from "../models/user.js";

export const signin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await UserData.find({ email: email, password: password });
        console.log(user)
        if (user.length > 0) {
            return res.status(200).json({ message: 'Valid User!' });
        } else {
            return res.status(404).json({ message: 'User  Not Found' })
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const signup = async (req, res) => {
    const user = req.body
    const newuser = new UserData(user)
    try {
        await newuser.save();
        res.status(201).json(newuser)
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
}