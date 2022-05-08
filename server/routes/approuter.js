import express from 'express';
import { addTeacher, getProfile, getTeachers } from '../controllers/teacher.js';

import { signin, signup } from '../controllers/user.js';

const router = express.Router();

// middleware

router.get('/signin', signin);
router.post('/signup', signup);
router.get('/teachers', getTeachers);
router.post('/addteacher', addTeacher);
router.get('/tprofile', getProfile);

export default router;