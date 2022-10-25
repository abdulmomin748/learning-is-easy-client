import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/common/Footer';
import Header from '../Pages/common/Header';

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;