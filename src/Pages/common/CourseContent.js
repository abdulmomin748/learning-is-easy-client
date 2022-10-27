import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
const CourseContent = ({content}) => {
    let uniqueContentValue;
    for (const uniqueContent in content) {
        uniqueContentValue = content[uniqueContent]
    };
    return (
        <>
            <div className='font-semibold flex items-center'>
                <FontAwesomeIcon icon={faCirclePlay} />
                <p className='ml-2'>{uniqueContentValue}</p>
            </div>
        </>
    );
};

export default CourseContent;