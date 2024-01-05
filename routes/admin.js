const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes

router.post('/signup', async (req,res)=>{
    // admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists

    await Admin.create({
        username: username,
        password: password
    })

    res.join({
        message: "Admin created successfully"
    })
});


router.post('/courses', adminMiddleware, async (req,res) => {
    // Course Creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // zod

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })


    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })


});

router.get('/courses', adminMiddleware, (req,res) => {
    // fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;