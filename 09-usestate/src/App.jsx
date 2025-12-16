import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function incrementNum() {
    setNum(num + 1);
  }
  function decrementNum() {
    setNum(num - 1);
  }
  function jump5() {
    setNum(num + 5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incrementNum}>+</button>
      <button onClick={decrementNum}>-</button>
      <button onClick={jump5}>jump 5</button>
    </div>
  );
};

export default App;
