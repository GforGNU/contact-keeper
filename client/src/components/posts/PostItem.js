 import React from 'react';

 const PostItem = ({post}) => {
    const {id, name, email, phone, type} = post; 
    
    return (
         <div className='card bg-light'>
            <h3>
            {name}{' '}<span className={'badge' + ()}></span>
            </h3>
         </div>
     )
 }

 export default PostItem;