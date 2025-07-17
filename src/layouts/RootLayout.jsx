import React from 'react';
import NavBar from '../pages/Shared/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
       <>
      <div className=''>
         <NavBar></NavBar>
      </div>
       <Outlet></Outlet>
       <Footer></Footer>
       
       </>
    );
};

export default RootLayout;