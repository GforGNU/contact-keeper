import React, {Fragment, useContext} from 'react';
import PostContext from '../../context/post/PostContext';


const Posts = () => {
const postContext = useContext(PostContext);
const { posts } = postContext;
return (
  <Fragment>
      {posts.map(post => (
      <h3>{post.name}</h3>
      ))}
  </Fragment>
)
}

export default Posts;