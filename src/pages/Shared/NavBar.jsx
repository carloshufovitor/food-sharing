import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { auth } from '../../Firebase/Firebase.init';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const NavBar = () => {

      const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // signout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/login");
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Something went wrong during logout");
      });
  };

     const items = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-black hover:bg-[#73b21a] rounded hover:text-white"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/available-foods"
          className="text-black hover:bg-[#73b21a] rounded hover:text-white"
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className="text-black hover:bg-[#73b21a] rounded hover:text-white"
        >
          Contact Us
        </NavLink>
      </li>

       {user && (
        <>
          <li>
            <NavLink
              to="/add-food"
              className="text-black hover:bg-[#73b21a] rounded hover:text-white"
            >
              Add Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-my-foods"
              className="text-black hover:bg-[#73b21a] rounded hover:text-white"
            >
              Manage My Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-food-request"
              className="text-black hover:bg-[#73b21a] rounded hover:text-white"
            >
              My Food Request
            </NavLink>
          </li>
        </>
      )}
 
    </>
     );

    return (
        <div className=''>
          <div className=" navbar bg-gradient-to-r from-[#f8fbf6] to-[#e9f3e3] shadow-[0_2px_4px_rgba(0,0,0,0.1)] fixed top-0 z-50">
  <div className="navbar-start md:pl-15">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       
        {items}

      </ul>
    </div>
    <Link to='/'><h2 className='text-xl font-bold'>Food <span className='text-[#73b21a]'>Sharing</span></h2></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
        {items}

    </ul>
  </div>
  <div className="navbar-end md:pr-15">
     {user ? (
          <>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 mr-2 rounded-full ring-2 ring-offset-2">
                <img
                  title={user?.displayName || ""}
                  className=""
                  src={user.photoURL}
                />
              </div>
            </div>
            <Link
              onClick={handleLogout}
              to="/logout"
              className="btn bg-[#73B21A] text-white hover:bg-[#f2f8ec] hover:text-black ml-2"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#73B21A] text-white hover:bg-[#f2f8ec] hover:text-black mr-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn bg-[#73B21A] text-white hover:bg-[#f2f8ec] hover:text-black"
            >
              SignUp
            </Link>
          </>
        )}
  </div>
</div>
        </div>
    );
};

export default NavBar;