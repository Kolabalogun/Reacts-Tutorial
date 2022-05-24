import React from "react";
import Main from "./props";

const Count = () => {

    const [count, countFunc] = React.useState(0)
    function add(params) {
        countFunc(prevState => count + 1)
    }
    function sub(params) {
        countFunc(prevState => count - 1)
    }
    
    return ( 
        <div>
           <Main 
           count={count}
           addition={add}
           subtract={sub}
           />
        </div>
     );
}
 
export default Count;