import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


const App = () => ( 
<>
<h1 className='heder_style'>List of top 5 Netflix Series in 2020 </h1>
{Sdata.map((val, index) =>{
     return(
        <Card
        key={val.id}
        imgscr={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.link}
/>
    );
})}
</>
);
export default App;