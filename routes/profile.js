const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');


// @route Get api/profile
// @desc   get user profile
// @access private 
router.get('/', auth, async (req,res)=>{
    try {
        const userProfile = await User.findById(req.user.id)
        res.json(userProfile.name + " " + userProfile.email);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;