import React from "react";

function Login() {
  // handlesubmit takes one parameter the event object
  // objects contains information aboutthe form submission
  function handleSubmit(event) {
    // preveDefault helps ptrevent refreshig or network request
    event.preventDefault();
    console.log("I submit");
  }

  return (
    // using onSubmit to show message when its written down
    // using handleSubmit to handle form submission
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );
}

export default Login;
