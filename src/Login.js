import React from "react";
import "./login.css";

function Login() {
  return (
    <>
      <div>
        <form className="form">
          <div className="log-form">
            <h1>Login Form</h1>
          </div>
          <div className="mb-3 px-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="email"
            />
          </div>

          <div className="mb-3 px-3">
            <label for="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="password"
            />
          </div>

          <div className="px-3">
            <button className="sub-btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
