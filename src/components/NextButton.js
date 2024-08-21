function NextButton({ dispatch, answer }) {
  if (answer === null) {
    return null;
  } else {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  }
}

export default NextButton;
