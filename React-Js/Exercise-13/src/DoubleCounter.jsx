import { useReducer } from "react";

const initinalState = {
  counterA: 0,
  counterB: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment_A":
      return { ...state, counterA: state.counterA + 1 };
    case "decrement_A":
      return { ...state, counterA: state.counterA - 1 };
    case "increment_B":
      return { ...state, counterB: state.counterB + 1 };
    case "decrement_B":
      return { ...state, counterB: state.counterB - 1 };
    case "ResetAll":
      return initinalState;
    default:
      return state;
  }
};

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initinalState);
  return (
    <div>
      <h1>Double Cunter</h1>
      <div>
        <h3>Counter A: {state.counterA}</h3>
        <button
          onClick={() => dispatch({ type: "decrement_A" })}
          disabled={state.counterA === 0}
        >
          A-
        </button>
        <button onClick={() => dispatch({ type: "increment_A" })}>A+</button>
      </div>
      <div>
        <h3>Counter B: {state.counterB}</h3>
        <button
          onClick={() => dispatch({ type: "decrement_B" })}
          disabled={state.counterB === 0}
        >
          B-
        </button>
        <button onClick={() => dispatch({ type: "increment_B" })}>B+</button>
      </div>
    </div>
  );
};

export default DoubleCounter;
