import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", title);

    setTitle("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandeler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
