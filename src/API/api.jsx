import React, { useEffect } from 'react'

const Effects = () => {
    
    const [starwarsData, starwarsDataF] = React.useState({})
    const [count, setcount] = React.useState(1)


    React.useEffect(() => {
      console.log(useEffect)
      fetch(`http://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => starwarsDataF(data))
    
      
    }, [count])
    

    function handleClick(params) {
        setcount(prevstate => prevstate + 1)
    }
    return ( 

        <div>
            <h2>The count is {count} </h2>
            <button onClick={handleClick}>Add</button>
            <pre>{JSON.stringify(starwarsData,null, 2)}</pre>
        </div>
     );
}
 
export default Effects;