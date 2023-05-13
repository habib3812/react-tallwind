import React from 'react';
import Navbar from './component/navbar';
import Price from './pricelist/price';
import Dashbord from './dashbords/dashbord';

const App = () => {
    return (
        <div>

            <Navbar></Navbar>
            <h1 className=" ml-5 text-center text-5xl font-bold  text-purple-500" >
                Hello world!
            </h1>
            <Price></Price>
        <Dashbord></Dashbord>
        </div>
    );
};

export default App;