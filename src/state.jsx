import React from "react";

const State = () => {
    const [thingsArray, thingsArrayFuction] = React.useState(['Things 1', 'Things 2'])


    function addToArray() {
        thingsArrayFuction(prevStateArray => {
            return [...prevStateArray, `Things ${thingsArray.length + 1}`]
        })
    }

    const ThingsElement = thingsArray.map(newArray => <p key={newArray}>{newArray}</p>)

    return (
        <div>
            <h1>{ThingsElement}</h1>
            <button onClick={addToArray}>Add</button>

        </div>
    )


};

export default State;
