import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEye,faEyeSlash, faTicket } from '@fortawesome/free-solid-svg-icons';
const LearnTopic = ({learnTopic}) => {
    let uniqueTopicValue;
    for (const uniqueTopic in learnTopic) {
        uniqueTopicValue = learnTopic[uniqueTopic]
    };
    return (
        <>
            <div className='font-semibold flex items-center'>
                <FontAwesomeIcon icon={faCheck} />
                <p className='ml-2'>{uniqueTopicValue}</p>
            </div>
        </>
    );
};

export default LearnTopic;