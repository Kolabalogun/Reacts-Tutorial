import React from 'react'
import Window from './window';

const Homepage = () => {

    const [state, stateF] = React.useState(true)

    function handleClick(params) {
      stateF(prevState => !prevState)
      console.log(state);
    }

    return ( 
        <div className="window">
            <button onClick={handleClick}>Toggle Window Tracker</button>
            {state && <Window/>} 
        </div>
     );
}
 
export default Homepage;