import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TextForm from '../../components/TextForm/TextForm';

const Home = () => {
    return (
        <div>
            <Navbar title="Text Transform" />
            <TextForm heading="Enter your text below:" />
        </div>
    );
};

export default Home;