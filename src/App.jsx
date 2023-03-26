import React, { useState } from 'react';



const App = () => {
    const purple = "#8e44ead";        
    const [bg, setbg]= useState(purple);
    const [name, setName] = useState('Click Me Yogesh')
    const bgChange = ()=> {
        let newBg = '#34495e';
        setbg(newBg);
        setName('Ouuch! 😠');
    };

    const bgBack = ()=> {
        setbg(purple);
        setName("Ayoo 🌴");
    };
    return(
        <>
            <div style={{backgroundColor: bg}} >
                <button onMouseEnter={bgChange} onDoubleClick={bgBack}> {name}  </button>
            </div>
        </>
    );
};

export default App;