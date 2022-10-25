import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import lgo from '../../assets/w1rkxm-removebg-preview.png'
import HeaderTop from './HeaderTop';
import avtar from '../../assets/avatar.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    // const {displayName, email, emailVerified, uid, photoURL } = user;
    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire({
                icon: 'error',
                title: 'Log Out Successfully!!',
              })
        })
        .catch(error =>{})
    }
    return (
        <>  
            <HeaderTop />
            <header className="p-4 bg-[#dde4dd] text-gray-900 font-bold py-4">
                <div className="max-w-7xl lg:px-4 flex justify-between h-16 mx-auto">
                    <div className="flex">
                        <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
                            <img className='w-32' src={lgo} alt="" srcset="" />
                        </Link>
                        <ul className="items-stretch hidden space-x-3 lg:flex">
                            <li className="flex">
                                <Link rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
                            </li>
                            <li className="flex">
                                <Link rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</Link>
                            </li>
                            <li className="flex">
                                <Link rel="noopener noreferrer" to="/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact Us</Link>
                            </li>
                            <li className="flex">
                                <Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        
                        {
                            user?.uid ? <button onClick={handleLogOut} className="mr-4 px-8 py-3 font-semibold rounded bg-red-500 text-white">Log Out</button>
                            :
                            <>
                                <Link to='/register' className="mr-4 px-8 py-3 font-semibold rounded bg-violet-900 text-white">Register</Link>
                                <Link  to='/login' className="mr-4 px-8 py-3 font-semibold rounded bg-violet-900 text-white">Sign In</Link>
                            </>
                        }
                        <div className="avatar online ">
                            <Link to='/profile' className="w-16 rounded-full flex items-center custom-avater" id='hellow' title=     {user?.displayName}>
                                {
                                    user?.uid ? <img className="w-14 rounded-full flex items-center" src={user?.photoURL} alt=""/> : <img className='c-img w-14' src={avtar} alt="profileImage"/>
                                }
                            </Link>
                        </div>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;