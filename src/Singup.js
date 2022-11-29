import React from "react";

function Singup() {
  return (
    <>
      <div>
        <form className="form">
          <div className="log-form">
            <h1>SingUp Form</h1>
          </div>
          <div className="mb-3 px-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="FirstName"
            />
          </div>

          <div className="mb-3 px-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="LastName"
            />
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

export default Singup;
