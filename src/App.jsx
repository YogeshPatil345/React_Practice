import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = 'youtube';

// const FavS = () => {
// if ( favSeries === 'netflix'){
//    return <Netflix />;

// }else{
//     return <Amazon />;
// }
// };

const App = () => ( 
<>
<h1 className='heder_style'>List of top 5 Netflix Series in 2020 </h1>
{/* <FavS /> */}

{favSeries === "Amazon" ?  <Netflix /> :  <Amazon /> }
</>
);
export default App;