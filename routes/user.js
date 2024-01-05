const { Router } = require('express');
const router = Router();
const middleware = require('../middleware/user');
const userMiddleware = require('../middleware/user');


// user routes

router.post('/signup' , (req, res) => {
    // Implement listing all courses logic
});

router.post('courses/:courseId', userMiddleware, (req,res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req,res) =>{
    // Implement fetching purchased course logic
});

module.exports = router