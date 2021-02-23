import React, {useReducer} from 'react';
// import uuid from 'uuid';
import {v4 as uuidv4} from "uuid"; 
import PostContext from './PostContext';
import postReducer from './PostReducer';
import {
    ADD_POST,
    DELETE_POST,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_POST,
    FILTER_POSTS,
    CLEAR_FILTER
} from '../types';

const PostState = props => {
    const initialState = {
        posts: [
            {id:1,
            title: 'title test',
            body: 'this is the body',
        }
        ]
    };
const [state, dispatch] = useReducer(postReducer, initialState);

//Add post
const addPost = post => {
    post.id = uuidv4();
    dispatch({type: ADD_POST, payload: post});
}
//Delete post
const deletePost = id => {
    dispatch({type: DELETE_POST, payload: id});
}
//Set current post

//Clear current post

//update post

//filter post

//clear filter

return (
    <PostContext.Provider value={{
        posts: state.posts,
        addPost,
        deletePost
    }}>
        {props.children}
    </PostContext.Provider>
)

};

export default PostState;