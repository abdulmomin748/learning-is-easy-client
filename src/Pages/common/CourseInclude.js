import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const CourseInclude = ({courseInclude}) => {
    let uniqueCourseIncludeValue;
    for (const uniqueCourseInclude in courseInclude) {
        uniqueCourseIncludeValue = courseInclude[uniqueCourseInclude]
    };
    return (
        <>
            <div className='font-semibold flex items-center'>
                <FontAwesomeIcon icon={faCircle} />
                <p className='ml-2'>{uniqueCourseIncludeValue}</p>
            </div>
        </>
    );
};

export default CourseInclude;