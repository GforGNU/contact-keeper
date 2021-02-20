import React, {useReducer} from 'react';
import uuid from 'uuid';
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
            name: 'Lojain Nahhas',
            email: 'loj@gmail.com',
            phone: '089898',
            type: 'professional'
        }
        ]
    };
const [state, dispatch] = useReducer(postReducer, initialState);

//Add post

//Delete post

//Set current post

//Clear current post

//update post

//filter post

//clear filter

return (
    <PostContext.Provider value={{
        posts: state.posts
    }}>
        {props.children}
    </PostContext.Provider>
)

};

export default PostState;