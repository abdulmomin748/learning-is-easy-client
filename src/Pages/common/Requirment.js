import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faEye,faEyeSlash, faTicket } from '@fortawesome/free-solid-svg-icons';
const Requirment = ({requiment}) => {
    let uniqueRequirmentValue;
    for (const uniRequiement in requiment) {
        uniqueRequirmentValue = requiment[uniRequiement]
    };
    return (
        <>
            <div className='font-semibold flex items-center'>
                <FontAwesomeIcon icon={faCircle} />
                <p className='ml-2'>{uniqueRequirmentValue}</p>
            </div>
        </>
    );
};

export default Requirment;