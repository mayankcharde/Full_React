import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply } from "../redux/counter/counterSlice.js";


// HUM APP.JSX KE ALAVA COMPONENTS BHI RUN KR SAKTE HAI
const Navbar = () => {
  const dispatch = useDispatch();
  //  USESELECTOR REDUX KI HOOK HAI JISME
  const count = useSelector((state) => state.mayank.value);
  return (
    <>
      {/* <Navbar />/ */}
      <div>
        <h2>Currently the count is {count}</h2>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  );
};

export default Navbar;
