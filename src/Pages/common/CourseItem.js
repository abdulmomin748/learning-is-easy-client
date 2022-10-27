import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CourseItem = ({courseItem}) => {
    const {id, author, courseName, img, rating,price } = courseItem;
    const {number, reviews } = rating
    console.log(courseItem)
    return (
        <>
            <Link to={`/courses/courseDetails/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm border-2 rounded border-gray-300 mx-auto group hover:no-underline focus:no-underline dark:text-white text-black">
                <img role="presentation" className="object-cover w-full rounded h-44 " src={img}/>
                <div className="p-3 space-y-2">
                    <h3 className="text-1xl font-bold group-hover:underline group-focus:underline">{courseName}</h3>
                    <span className="text-sm dark:text-gray-400">{author}</span>
                    <div className='flex items-center text-[#b4690e]' >
                        <p className='mr-2 font-medium text-[16px] ' >{number} </p>
                        <div className='text-[12px] mr-2'>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className='text-sm text-black dark:text-white'>({reviews})</p>
                    </div>
                    <p className='font-bold'>{price}</p>
                    <span className={rating?.seller ? 'text-sm inline-block px-2 py-1 mt-[20px  ] bg-[#b4690e] text-white rounded': '' }>{rating?.seller}</span>
                </div>
            </Link>
        </>
    );
};

export default CourseItem;

