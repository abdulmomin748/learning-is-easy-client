import React from 'react';
import { Link } from 'react-router-dom';
import '../page.css'
const CourseItemRIghtNav = ({courseItem, uniqueCourse}) => {
    const {courseName, id } = courseItem;
    console.log(uniqueCourse);
    return (
        <>
            <Link to={`/courses/courseDetails/${id}`} className='mb-4 pb-1 custom-brder relative inline-block font-semibold hover:underline group-focus:underline'>{courseName}</Link>
        </>
    );
};

export default CourseItemRIghtNav;