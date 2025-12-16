import React from "react";

const App = () => {
  const submitHandeller = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandeller(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
