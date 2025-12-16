import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3>Hello, {elem.author}{elem.image}{idx}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
