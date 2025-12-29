import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.mayank.value);

  const [num, setNum] = useState(5);

  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>

      <input
        value={{ num }}
        type="number"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
      >
        increase amount
      </button>
    </div>
  );
};

export default App;
