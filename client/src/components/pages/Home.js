import React, { useContext, useEffect } from 'react';
import PostForm from '../posts/PostFrom';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    return (

   
        <div className=''>
            <h1> {/*user name*/}</h1>
    <PostForm />
    </div>
    )
}

export default Home;