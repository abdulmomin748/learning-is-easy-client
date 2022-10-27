import React from 'react';
// import { BiDownArrow } from 'react-icons/fa';
import arrow from '../../assets/bg-arrow-down@2x.png'
import { Typewriter } from 'react-simple-typewriter'
import '../page.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh] z-10 bg-img  flex justify-center items-center relative text-center">
                <div className="hero-content text-center z-10 text-white">
                    <div className="max-w-[599px] m-auto z-10 text-white">
                        <div className='mb-5 '>
                            <span className="mb-5 lg:text-5xl md:text-4xl font-bold text-3xl">Learn</span>{'  '}
                               <span className='lg:text-5xl md:text-4xl font-bold text-3xl'>
                                <Typewriter
                                    words={['Better', 'Something', 'Everything', 'What You Need', 'More']}
                                    loop={1000}
                                    cursor
                                    cursorStyle='✔'
                                    typeSpeed={90}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                        <p className='font-bold'>Experience nature in its purest form, while enjoying attention to detail, indulgent pampering and exceptional cuisine.</p>
                        <Link to='/courses'>
                            <button className="px-8 mt-9 py-3 font-semibold rounded bg-blue-500 text-white">Enroll Now</button>
                        </Link>
                        <img id='arrow-down' className='' src={arrow} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;