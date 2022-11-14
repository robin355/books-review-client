import React from 'react';
import BooksHome from '../Books/BooksHome/BooksHome';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BooksHome></BooksHome>
        </div>
    );
};

export default Home;