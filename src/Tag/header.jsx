import React from 'react';
import './tagstyle.css'


const Header = (props) => {

  

    return ( 
        <header className='taghead'>
            <p>Current User : {props.user}</p>
        </header>
     );
}
 
export default Header;