import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faEye,faEyeSlash, faPerson, faTicket } from '@fortawesome/free-solid-svg-icons';
const CourseFor = ({course}) => {
    let uniqueCourseValue;
    for (const uniqueCourse in course) {
        uniqueCourseValue = course[uniqueCourse]
    };
    return (
        <>
            <div className='font-semibold flex items-center'>
                <FontAwesomeIcon icon={faPerson} />
                <p className='ml-2'>{uniqueCourseValue}</p>
            </div>
        </>
    );
};

export default CourseFor;