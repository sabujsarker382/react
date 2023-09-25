import React from 'react'
import { useState } from 'react';
//import Card from './components/card/Card.jsx'
import Info from './components/info/Info.jsx';
//import Data from './data.json';



function App() {
  const [data, setData] = useState([]);
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result =>setData(result) )

      // let items = [];
      // items=data.map((it,index) => <Card  key={index} titleText={it.name} titleDes={it.username} />)


      let xtra=[];
      xtra=data.map((it,index) => <Info key ={index} titleText={it.name} titleDes={it.email} />)
 
  // let item=[];
  // for(let i=0;i<Data.length;i++){
  //   item.push(<Card titleText={Data[i].title} titleDes={Data[i].des}/>)
  // }

  return (
   <div>
   <h1 className='headingstyle'>To Do App</h1>
  
      <div className="container">
   
     
   {xtra}
      </div>
  
   </div>
  )
}

export default App
