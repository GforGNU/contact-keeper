import React, {Fragment, useContext} from 'react';
import PostContext from '../../context/post/PostContext';
import PostItem from './PostItem';


const Posts = () => {
const postContext = useContext(PostContext);
const { posts } = postContext;
return (
  <Fragment>
      {posts.map(post => (
 <PostItem key={post.id} post={post} />
      ))}
  </Fragment>
)
}


export default Posts;