import React, {useState, useContext} from 'react';
import PostContext from '../../context/post/PostContext';


const PostForm = () => {

    const postContext = useContext(PostContext);

   const [post, setPost] = useState({
       title: '',
       body: ''
   }); 
   
   const {title, body} = post;

const onChange = e => setPost({...post, [e.target.name]: e.target.value});


const onSubmit = e => {
    e.preventDefault();
    postContext.addPost(post);
    setPost({
        title: '',
        body: ''
    });
};
   return (
    <div>
    {/*post form*/}
    <form onSubmit={onSubmit}>
         <div className="form-group">
         <label forHtml="exampleFormControlInput1">Title</label>
         <input value={title} onChange={onChange} type="text" name="title" className="form-control"  placeholder="Title"/>
         </div>

         <div className="form-group">
             <label forHtml="exampleFormControlTextarea1">Example textarea</label>
             <textarea value={body}  onChange={onChange} className="form-control" name="body" id="exampleFormControlTextarea1" rows="3"></textarea>
         </div>

         <div>
             <input type="submit" value="Add Post" class="btn btn-primary" />
         </div>
     </form>
 </div>


     
    )
}

export default PostForm;