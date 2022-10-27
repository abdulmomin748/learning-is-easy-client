import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import imgPdf from '../assets/pdf.png';

import Pdf from "react-to-pdf";
import LearnTopic from './common/LearnTopic';
import Requirment from './common/Requirment';
import CourseContent from './common/CourseContent';
import CourseInclude from './common/CourseInclude';
import CourseFor from './common/CourseFor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const ref = createRef();
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {author, courseName, course_info, id, img, total_enroll, what_you_learn} = courseDetails;
    const {requirements, course_content_release_week, description, course_for, course_include} = course_info;
    console.log(what_you_learn);
    return (
        <div className='max-w-7xl m-auto px-5 lg:px-4 pb-6' ref={ref}>
            <div className='relative mb-12'>
                <img className='object-cover lg:h-96 md:h-80 h-[300px] w-full' src={img} alt="" />
                <div className='bg-[#a435f0] dark:bg-[#3c4371] rounded text-white lg:w-2/3 md:w-2/3 w-[90%] -mt-24 z-10 relative m-auto lg:px-10 md:px-8 px-4 py-20 text-center '>
                    <h1 className='lg:text-3xl text-2xl font-bold course-title custom-brder relative  mb-4 pb-4'>{courseName}</h1>
                    <p className='font-medium text-xl'>Made By : {author}</p>
                    <p className='font-medium text-xl'>Stuedents : {total_enroll}</p>
                    <Link to={`/checkout/${id}`} className='dark:bg-pink-600 dark:text-white bg-white text-gray-600  font-bold px-4 rounded py-2 inline-block mt-5'>
                        Get Premium Access
                    </Link>

                    <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) =>
                            <button 
                                title='Download Course Details'
                                onClick={toPdf}
                                className='m-auto mt-10 block'>
                                    <img src={imgPdf} alt="pdf_img"/>
                            </button>
                        }
                    </Pdf>
                    
                </div>
            </div>
            <div className='border rounded max-w-5xl m-auto font-bold lg:p-12 md:p-8 p-4 text-black mt-6 dark:text-white'>
                <h2 className='text-bold text-2xl mb-2'><FontAwesomeIcon className='mr-2' icon={faHandPointRight} />What You Learn</h2>
                {
                    what_you_learn.map(learnTopic => <LearnTopic learnTopic={learnTopic} />)
                }
            </div>
            <div className='border rounded max-w-5xl m-auto font-bold lg:p-12 md:p-8 p-4 text-black mt-6 dark:text-white'>
                <h2 className='text-bold text-2xl mb-2'><FontAwesomeIcon className='mr-2' icon={faHandPointRight} />Below Requirements you need</h2>
                {
                    requirements.map(requiment => <Requirment requiment={requiment} />)
                }
            </div>
            <div className='border rounded max-w-5xl m-auto font-bold lg:p-12 md:p-8 p-4 text-black mt-6 dark:text-white'>
                <h2 className='text-bold text-2xl mb-2'><FontAwesomeIcon className='mr-2' icon={faHandPointRight} />Course Content</h2>
                {
                    course_content_release_week.map(content => <CourseContent content={content} />)
                }
            </div>
            <div className='border rounded max-w-5xl m-auto font-bold lg:p-12 md:p-8 p-4 text-black mt-6 dark:text-white'>
                <h2 className='text-bold text-2xl mb-2'><FontAwesomeIcon className='mr-2' icon={faHandPointRight} />This course includes</h2>
                {
                    course_include.map(courseInclude => <CourseInclude courseInclude={courseInclude} />)
                }
            </div>
            <div className='border rounded max-w-5xl m-auto font-bold lg:p-12 md:p-8 p-4 text-black mt-6 dark:text-white'>
                <h2 className='text-bold text-2xl mb-2'><FontAwesomeIcon className='mr-2' icon={faHandPointRight} />Course For</h2>
                {
                    course_for.map(course => <CourseFor course={course} />)
                }
            </div>
            <div className='rounded max-w-5xl m-auto font-bold p-12 text-black mt-6 dark:text-white'>
                <h2 className='text-bold text-2xl mb-2'><FontAwesomeIcon className='mr-2' icon={faCircleInfo} /> Decription</h2>
                <p>{description.desc}</p>
            </div>
        </div> 
    );
};

export default CourseDetails;