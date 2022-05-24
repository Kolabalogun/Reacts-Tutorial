const Main = (props) => {

    const style = {
        padding : "5px"
    }
    return ( 
        <div>
        <button style={style} onClick={props.addition}>Add</button>
        <h3>{props.count}</h3>
        <button style={style} onClick={props.subtract}>SUb</button>
    </div>
     );
}
 
export default Main;