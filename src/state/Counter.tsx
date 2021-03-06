import { useReducer } from "react";
import { CounterAction } from "../types/CounterAction.types";
import { CounterState } from "../types/CounterState.types";

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count : {state?.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
