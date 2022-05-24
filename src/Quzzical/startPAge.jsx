

import './quizz.css'

const StartPage = (props) => {
    return props.trigg ? ( 
<div className="main">
    <h1>Quizz</h1>
    <p>Some description if needed</p>

    <button className='startbtn' onClick={props.handleClick}>Start Quiz</button>
</div>
     ) : "";
}
 
export default StartPage;
