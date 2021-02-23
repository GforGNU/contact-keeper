 import React, { useContext } from 'react';
 import PropTypes from 'prop-types';
 import PostContext from '../../context/post/PostContext';


 const PostItem = ({post}) => {
const postContext = useContext(PostContext)
const {deletePost} = postContext;
    const {id, title, body} = post; 
    
   const onDelete = ()=> {
   deletePost(id);
   }

    return (
        
            <div class="card">
    <div class="card-body">
      <h5 class="card-title">{post.title}</h5>
      <p class="card-text">{post.body}</p>
      <a href="#" class="btn btn-primary">Edit</a>
      <a onClick={onDelete} href="#" class="btn btn-danger">Delete</a>
    </div>
  </div>
      
     );
 };


 PostItem.prototype = {
    post: PropTypes.object.isRequired
 }
 export default PostItem;