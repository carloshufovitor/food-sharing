import React, { useContext } from 'react';
import NavBar from '../pages/Shared/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import { AuthContext } from '../context/AuthContext/AuthProvider';
import Loading from '../Loading';

const RootLayout = () => {
 const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
       <Loading></Loading>
      </div>
    );
  }

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