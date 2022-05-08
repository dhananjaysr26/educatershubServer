import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    T: Boolean,
})

const UserData = mongoose.model('User', userSchema)
export default UserData;