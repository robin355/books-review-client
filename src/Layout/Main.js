import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Footer/Footer';
import Navbar from '../pages/Home/Navabar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;