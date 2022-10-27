import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import lgo from '../../assets/hdr-logo.png';
import lgoLight from '../../assets/hdr-logo2.png';
import HeaderTop from './HeaderTop';
import avtar from '../../assets/avatar.png'
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const [openMenu, setOpenMenu] = useState(false)
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
            <header className="p-4 dark:bg-[#241829] bg:text-white dark:border-b-[1px] border-b-[#494747] bg-gray-200 text-gray-900 font-bold py-4">
                <div className="max-w-7xl lg:px-4 flex justify-between h-16 mx-auto relative">
                    <div className="flex items-center"> 

                        {/* desktip header right part */}
                        <Link to="/" aria-label="Back to homepage" className="flex mr-2 items-center p-2">
                            <img className='w-20 light:hidden imgLight' src={lgo} alt="" srcset="" />
                            <img className='w-20 dark:hidden ' src={lgoLight} alt="" srcset="" />
                        </Link>
                        <ul className="hidden space-x-3 lg:flex items-center">
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


                        {/* mobile menu start */}
                        {
                            openMenu && (
                                <div className='block mobile-menu lg:hidden'>
                                    <div className='absolute right-0 -top-0 left-0 w-full py-6 bg-[#18071d] z-20 rounded'>
                                        <div className='mobile-menu-top flex justify-between items-center lg:px-10 px-4 md:px-6 border-b-2 pb-6 mb-4'>
                                            <div className=" ">
                                                <Link to='/profile' className="w-16 rounded-full flex items-center custom-avater" id='hellow' title={user?.displayName}>
                                                    {
                                                        user?.uid ? <span className='avatar online'><img className="w-14 rounded-full flex items-center " src={user?.photoURL} alt=""/></span> : <img className='c-img w-14' src={avtar} alt="profileImage"/>
                                                    }
                                                </Link>
                                            </div>   
                                            <button
                                             onClick={() => setOpenMenu(false)}
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                
                                                >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                fill='currentColor'
                                                d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                            </button>
                                        </div>
                                        <div className='mobile-menu-innr'>
                                            <ul className="space-x-3 lg:flex items-center ">
                                                <li className="pb-4 ml-2">
                                                    <NavLink rel="noopener noreferrer" to="/home"
                                                    className={({isActive}) => isActive ?  "px-4 py-2 dark:text-yellow-900" : 'px-4 py-2 dark:text-gray-200'}>Home</NavLink>
                                                </li>
                                                <li className="pb-4 ml-0">
                                                    <NavLink rel="noopener noreferrer" to="/courses" className={({isActive}) => isActive ?  "px-4 py-2 text-gray-200 rounded dark:text-yellow-900" : 'px-4 py-2 dark:text-gray-200'}>Courses</NavLink>
                                                </li>
                                                <li className="pb-4 ml-0">
                                                    <NavLink rel="noopener noreferrer" to="/faq" className={({isActive}) => isActive ?  "px-4 py-2 dark:text-yellow-900 text-gray-200 rounded" : 'px-4 py-2 dark:text-gray-200'}>Faq</NavLink>
                                                </li>
                                                <li className="pb-4 ml-0">
                                                    <NavLink rel="noopener noreferrer" to="/blog" className={({isActive}) => isActive ?  "px-4 py-2 dark:text-yellow-900 text-gray-200 rounded" : 'px-4 py-2 dark:text-gray-200'}>Blog</NavLink>
                                                </li>
                                            </ul>
                                            <div className='flex justify-between lg:px-10 px-4 md:px-6 mt-2'>
                                                {
                                                    user?.uid ? <button onClick={handleLogOut} className="mr-4 px-8 py-3 font-semibold rounded bg-red-500 text-white">Log Out</button>
                                                    :
                                                    <>
                                                        <Link to='/register' className="mr-4 px-8 py-3 font-semibold rounded dark:bg-blue-300  bg-blue-500 text-white">Register</Link>
                                                        <Link  to='/login' className="mr-4 px-8 py-3 font-semibold rounded bg-violet-900 text-white bg-pink-600 dark:bg-[#008800]">Sign In</Link>
                                                    </>
                                                }
                                                
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        
                        {
                            user?.uid ? <button onClick={handleLogOut} className="mr-4 px-8 py-3 font-semibold rounded bg-red-500 text-white">Log Out</button>
                            :
                            <>
                                <Link to='/register' className="mr-4 px-8 py-3 font-semibold rounded dark:bg-blue-300  bg-blue-500 text-white">Register</Link>
                                <Link  to='/login' className="mr-4 px-8 py-3 font-semibold rounded bg-violet-900 text-white bg-pink-600 dark:bg-[#008800]">Sign In</Link>
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


                    {/* mobile humbergar */}
                    <button className="p-4 lg:hidden" onClick={() => setOpenMenu(true)}>
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