import React from 'react';
import './stylee.css'

const Boxdiv = (props) => {

    

    const styless = {
            backgroundColor: props.on ? "#000000" : "transparent"
    }

    
    return (  

       
        <div style={styless} className="devv" onClick={() => props.handleClick(props.id)}></div>
    );
}
 
export default Boxdiv;