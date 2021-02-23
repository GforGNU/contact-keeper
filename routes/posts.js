const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Post = require('../models/Post');

// @route Get api/posts
// @desc   get all users posts
// @access private 
router.get('/', auth, async (req,res)=>{
    try {
        const posts = await Post.find({user: req.user.id }).sort({date: -1})
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route Post api/posts
// @desc   add new post
// @access private 
router.post('/', [auth,  
    [
    check('title', 'title is required')
        .not()
        .isEmpty()
    ]
],
async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {title, body} = req.body;

        try{
            const newPost = new Post({
                title,
                body,
                user: req.user.id
            });
            const post = await newPost.save();
            res.json(post);
        } catch (err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }
});

// @route Put api/posts
// @desc   update post
// @access private 
router.put('/:id', auth, async (req,res)=>{
    const {title, body} = req.body;

    //build a post object
    const postFields = {};
    if(title) postFields.title = title;
    if(body) postFields.body = body;


    try {
        let post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({ msg: 'Post not found'});
        
        //make sure user owns post
        if(post.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'not authorized'});


        }

        post = await Post.findByIdAndUpdate(req.params.id,
            { $set: postFields}, 
            {new: true});

            res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }
});

// @route Delete api/posts
// @desc   delete  post
// @access private 
router.delete('/:id', auth, async(req,res)=>{
    try {
        let post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({ msg: 'Post not found'});
        
        //make sure user owns post
        if(post.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'not authorized'});


        }

        await Post.findByIdAndRemove(req.params.id);
            res.json({msg:'Post removed'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }
});

module.exports = router;