import React from 'react';
import Form from '../Components/Form';
import Header from '../Components/Header';
import '../Styles/Home.css';


const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <Form />
        </div>
    );
};

export default Home;