import React from 'react';
import { Link } from 'react-router-dom';
import lgo from '../../assets/hdr-logo.png';
import lgoLight from '../../assets/hdr-logo2.png';

const Footer = () => {
    return (
        <div className='border-t-2 '>
            <footer className="footer p-10 max-w-7xl m-auto lg:px-4 px-5 ">
                <div className='flex flex-col items-center c-col'>
                    <Link to="/" aria-label="Back to homepage" className="flex uppercase items-center p-2">
                        <img className='w-20 light:hidden imgLight' src={lgo} alt="" srcset="" />
                        <img className='w-20 dark:hidden ' src={lgoLight} alt="" srcset="" />
                    </Link>
                    <p className='text-black font-medium dark:text-white'>Learning Is Easy</p>
                </div>
                <div className='c-col'>
                    <span className="footer-title text-black dark:text-white">Services</span> 
                    <Link className="link link-hover">Branding</Link> 
                    <Link className="link link-hover">Design</Link> 
                    <Link className="link link-hover">Marketing</Link> 
                    <Link className="link link-hover">Advertisement</Link>
                </div> 
                <div className='c-col'>
                    <span className="footer-title text-black dark:text-white">Company</span> 
                    <Link className="link link-hover">About us</Link> 
                    <Link className="link link-hover">Contact</Link> 
                    <Link className="link link-hover">Jobs</Link> 
                    <Link className="link link-hover">Press kit</Link>
                </div> 
                <div className='c-col'>
                    <span className="footer-title text-black dark:text-white">Legal</span> 
                    <Link className="link link-hover">Terms of use</Link> 
                    <Link className="link link-hover">Privacy policy</Link> 
                    <Link className="link link-hover">Cookie policy</Link>
                </div> 
                <div className='c-col'>
                    <span className="footer-title text-black dark:text-white">Newsletter</span> 
                    <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label> 
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;