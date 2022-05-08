import TeacherData from "../models/teacher.js";

export const getTeachers = async (req, res) => {
    try {
        const teachers = await TeacherData.find();
        console.log(teachers)
        if (teachers.length > 0) {
            return res.status(200).json(teachers);
        } else {
            return res.status(404).json({ message: 'Teachers Not Found' })
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const getProfile = async (req, res) => {
    const email = req.body.email;
    try {
        const teacher = await TeacherData.find({ email: email });
        console.log(teacher)
        if (teacher.length > 0) {
            return res.status(200).json(teacher);
        } else {
            return res.status(404).json({ message: 'Teacher Not Found' })
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const addTeacher = async (req, res) => {
    console.log(req.body)
    const teacher = req.body
    const newTeacher = new TeacherData(teacher)
    try {
        await newTeacher.save();
        res.status(201).json({ message: "Teacher Added Succesfully!" })
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
}