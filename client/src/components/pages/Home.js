import React from 'react';
import Posts from '../posts/Posts';

const Home = () => {
    return (
        <div className='grid-2'>
           <div>
               {/*post form*/}
           </div>
           <div>
               <Posts />
           </div>
           
        </div>
    )
}

export default Home;