import React from "react";

const App = () => {
  const user = {
    username: "Mayank Charde",
    age: 20,
    city: "Nagpur",
  };

  localStorage.setItem("user", JSON.stringify(user));
  const users = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h1>
        Hello {users.username} {users.age} {user.city}
      </h1>
    </div>
  );
};

export default App;
