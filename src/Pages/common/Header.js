import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import lgo from '../../assets/hdr-logo.png';
import lgoLight from '../../assets/hdr-logo2.png';
import HeaderTop from './HeaderTop';
import avtar from '../../assets/avatar.png'
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    // const {displayName, email, emailVerified, uid, photoURL } = user;
    // console.log(user)
    
    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire({
                icon: 'error',
                title: 'Log Out Successfully!!',
              })
        })
        .catch(error =>{
            Swal.fire({
                icon: 'error',
                title: `${error.message}`,
              })
        })
    }
    const darkTheme = document.querySelector('dark');
    const lightTheme = document.querySelector('light');

    return (
        <>  
            <HeaderTop />
            <header className="p-4 dark:bg-[#241829] bg:text-white dark:border-t-2 dark:border-b-2 bg-gray-200 text-gray-900 font-bold py-4">
                <div className="max-w-7xl lg:px-4 flex justify-between h-16 mx-auto">
                    <div className="flex items-center">
                        <Link to="/" aria-label="Back to homepage" className="flex mr-2 items-center p-2">
                            <img className='w-20 light:hidden imgLight' src={lgo} alt="" srcset="" />
                            <img className='w-20 dark:hidden ' src={lgoLight} alt="" srcset="" />
                        </Link>
                        <ul className="items-stretch hidden space-x-3 lg:flex items-center">
                            <li className="">
                                <NavLink rel="noopener noreferrer" to="/home"
                                className={({isActive}) => isActive ?  "px-4 py-2 rounded dark:text-gray-200 bg-[#da9707] text-gray-200" : 'px-4 py-2 dark:text-gray-200'}>Home</NavLink>
                            </li>
                            <li className="">
                                <NavLink rel="noopener noreferrer" to="/courses" className={({isActive}) => isActive ?  "px-4 py-2 dark:text-gray-200 text-gray-200 bg-[#da9707] rounded" : 'px-4 py-2 dark:text-gray-200'}>Courses</NavLink>
                            </li>
                            <li className="">
                                <NavLink rel="noopener noreferrer" to="/faq" className={({isActive}) => isActive ?  "px-4 py-2 dark:text-gray-200 text-gray-200 bg-[#da9707] rounded" : 'px-4 py-2 dark:text-gray-200'}>Faq</NavLink>
                            </li>
                            <li className="">
                                <NavLink rel="noopener noreferrer" to="/blog" className={({isActive}) => isActive ?  "px-4 py-2 dark:text-gray-200 text-gray-200 bg-[#da9707] rounded" : 'px-4 py-2 dark:text-gray-200'}>Blog</NavLink>
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
                        <div className=" ">
                            <Link to='/profile' className="w-16 rounded-full flex items-center custom-avater" id='hellow' title={user?.displayName}>
                                {
                                    user?.uid ? <span className='avatar online'><img className="w-14 rounded-full flex items-center " src={user?.photoURL} alt=""/></span> : <img className='c-img w-14' src={avtar} alt="profileImage"/>
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