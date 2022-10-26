import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import imgPdf from '../assets/pdf.png';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {author, courseName, course_info, id, img, total_enroll, what_you_learn} = courseDetails;
    console.log(courseDetails)
    return (
        <div className='max-w-7xl m-auto px-5 lg:px-4 pb-[300px]' ref={ref}>
            <div className='relative'>
                <img className='object-cover h-96 w-full' src={img} alt="" />
                <div className='bg-[#a435f0] rounded text-white w-2/3 -mt-24 z-10 relative m-auto px-10 py-20 text-center'>
                    <h1 className='text-3xl font-bold  mb-4'>{courseName}</h1>
                    <p className='font-medium text-xl'>Made By : {author}</p>
                    <p className='font-medium text-xl'>Stuedents : {total_enroll}</p>
                    <Link to={`${id}`} className='bg-pink-600 font-bold px-4 rounded py-2 inline-block mt-5'>
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
        </div> 
    );
};

export default CourseDetails;