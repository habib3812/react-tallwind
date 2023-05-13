import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashbord = () => {

    let students = [
        { id: 1, name: "student 1", physics: 70, chemistry: 10, math: 75 },
        { id: 2, name: "student 2", physics: 80, chemistry: 90, math: 85 },
        { id: 3, name: "student 3", physics: 75, chemistry: 85, math: 90 },
        { id: 4, name: "student 4", physics: 70, chemistry: 75, math: 80 },
        { id: 5, name: "student 5", physics: 90, chemistry: 95, math: 85 },
        { id: 6, name: "student 6", physics: 85, chemistry: 80, math: 75 },
        { id: 7, name: "student 7", physics: 92, chemistry: 88, math: 92 },
        { id: 8, name: "student 8", physics: 80, chemistry: 85, math: 80 },
        { id: 9, name: "student 9", physics: 65, chemistry: 75, math: 70 },
        { id: 10, name: "student 10", physics: 92, chemistry: 90, math: 80 },
        { id: 11, name: "student 11", physics: 80, chemistry: 70, math: 75 },
        { id: 12, name: "student 12", physics: 85, chemistry: 90, math: 80 }
      ];
      

    return (
        <div className='ml-5 mt-5'>
            <h1>
               <LineChart
               width={1000}
               height={300}
              data={students}
               >

                <Line
                    dataKey={"physics"}
                    >
                </Line>
                <Line dataKey={"chemistry"}></Line>
                <Line type="monotone" stroke="#8884d8"  dataKey={"math"}></Line>
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip />
          <Legend />
               </LineChart>
            </h1>
        </div>
    );
};

export default Dashbord;