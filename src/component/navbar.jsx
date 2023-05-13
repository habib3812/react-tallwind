import React, { useState } from 'react';
import Link from './Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {

    const myArray = [
        {
            id: 1,
            name: "John",
            path: "/users/1"
        },
        {
            id: 2,
            name: "Jane",
            path: "/users/2"
        },
        {
            id: 3,
            name: "Alex",
            path: "/users/3"
        },
        {
            id: 4,
            name: "Sarah",
            path: "/users/4"
        },
        {
            id: 5,
            name: "David",
            path: "/users/5"
        }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className='bg-purple-400 px-4'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>{open === true ? <Bars3Icon className="h-6 w-6 text-purple-500" /> : <XMarkIcon className="h-6 w-6 text-purple-500" />}</span>


            </div>
            <ul className={`md:flex md:static bg-purple-300 absolute duration-500  ${open ? 'top-6' : '-top-48'}`}
            >
                {
                    myArray.map(items =>
                        <Link
                            key={items.id}
                            items={items}

                        ></Link>
                    )
                }
            </ul>
        </div>
    );
};

export default Navbar;