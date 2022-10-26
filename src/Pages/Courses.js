import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from './common/CourseItem';
import pic from '../assets/small-profile-unstyled-1.png'
import CourseItemRIghtNav from './common/CourseItemRIghtNav';
const Courses = () => {
    const coursesData = useLoaderData();
    console.log(coursesData);
    let initalNumber = 0;
    const newNumber = initalNumber + 1;
    return (
        <div className='max-w-7xl m-auto px-4 py-24'>
            <div className="max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12 bg-[#dde4dd] dark:bg-gray-900 mb-16">
                <img src={pic} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5 flex flex-col justify-center text-black ">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Learning that gets you</h3>
                    <span className="text-sm dark:text-gray-400">February 19, 2021</span>
                    <p>Skills for your present (and your future). Get started with us.</p>
                </div>
            </div>
            <div className='py-12 rounded px-4 flex'>
                <div className="grid w-3/4 mr-8 justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        coursesData.map(courseItem => <CourseItem key={courseItem.id}  courseItem={courseItem} />)
                    }
                </div>
                <div className='w-1/4  text-black'>
                    <div className='bg-[#dde4dd] rounded px-3 py-5'>
                    {
                        coursesData.map(courseItem => <CourseItemRIghtNav key={courseItem.id} 
                            uniqueCourse={newNumber} courseItem={courseItem} />)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;