import React from 'react';
import {CheckIcon } from '@heroicons/react/24/solid'
const Fesrces = ({feature}) => {
    return (
        <div className='flex items-center '>
            <CheckIcon className="h-3 w-3 text-yellow-950" />
            <span>  {feature}</span>
        </div>
    );
};

export default Fesrces;