function StartScreen({numQuestions, dispatch}) {
    return (
        <div className="start">
            <h3>Welcome to the React quiz</h3>
            <p>{numQuestions} questions to test your skills</p>
            <button onClick={()=> dispatch({type: "start"})} className="btn btn-ui">Start</button>
        </div>
    )
}

export default StartScreen
