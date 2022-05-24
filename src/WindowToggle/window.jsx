import React from 'react';


const Window = () => {
    const [windowWidth, windowWidthF] = React.useState(window.innerWidth)

    React.useEffect(() => {
      window.addEventListener("resize", watchWidth)
    
      function watchWidth(params) {
        windowWidthF(window.innerWidth)
        
      }

      return function (params) {
        window.removeEventListener("resize", watchWidth)
        
      }
  
    }, [])
    

    return ( 
        <h2>Window Width : {windowWidth}</h2>
     );
}
 
export default Window;