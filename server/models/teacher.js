import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    about: String,
    demoLink: String,
    courses: [],
    location: String,
    skills: [],
    reviews: [],
    yoe: Number,
    rating: Number,
    image: {
        data: Buffer,
        contentType: String
    }
})

const TeacherData = mongoose.model('Teacher', userSchema)
export default TeacherData;