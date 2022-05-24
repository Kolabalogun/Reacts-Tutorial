const Example = () => {
    
      

  
    const isGoingOut = true

    let answer;

    if (isGoingOut === true) {
        answer = "Yes"
    }

    else{
        answer = "No"
    }

    return(
        <div>
            <h1>{answer}</h1>
        </div>    )
  


}
 
export default Example;