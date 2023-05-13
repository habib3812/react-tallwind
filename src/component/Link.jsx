import React from 'react';

const Link = ({items}) => {
    return (
        <li className='bg-purple-400 m-1 p-1 ml-5 w-12 rounded hover:bg-slate-500 '>
            <a href={items.path}>{items.name}</a>
        </li>
    );
};

export default Link;