import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Unid = () => {
    const [data, setData] = useState([]);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result =>setData(result) )
    
    return (
        <div>
           {
            data.map((item)=>{
               
                return(
                    <div key={uuidv4()}>
                        <h1>{item.name}</h1>
                        <p>{item.username}</p>
                    </div>
                )
            })
           } 
        </div>
    );
};

export default Unid;