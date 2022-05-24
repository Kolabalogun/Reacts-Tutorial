import Body from "./body";
import Header from "./header";
import React from 'react'

const Interface = () => {

    const [user, userfunction] = React.useState("Joe")

    return ( 
        <div>
            <Header 
            user = {user}
            />
            <Body 
            name = {user}
            />
        </div>
     );
}
 
export default Interface;