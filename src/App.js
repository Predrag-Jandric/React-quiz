import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";


function App() {
const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="app">
      <Header />

      <Main className="main">
        <p>1/15</p>
        <p>question</p>
      </Main>
    </div>
  );
}

export default App;
