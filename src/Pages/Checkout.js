import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='my-24'>
            <h2 className='mb-8 pb-4 text-center course-title2 text-4xl font-bold text-black  dark:text-gray-300 relative custom-brder'>Welcome To Checkout Page</h2>
            <div className='m-auto flex flex-col max-w-lg p-6 justify-center rounded-md sm:p-10 dark:bg-gray-800 bg-gray-100 text-gray-900 min-h-[500px] dark:text-gray-300'>  
                <h2 className='text-2xl text-black dark:text-gray-300 font-bold mb-5'><span className='bg-gray-900 rounded text-white py-1 px-4'>Course Name:</span> {data.courseName} </h2>
                <h2 className='text-2xl text-black dark:text-gray-300 font-bold'><span className='bg-gray-900 rounded text-white py-1 px-4'>Total Student:</span> {data.total_enroll} </h2>
            </div>
        </div>
    );
};

export default Checkout;