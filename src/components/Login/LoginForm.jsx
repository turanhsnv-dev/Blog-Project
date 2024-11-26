import React, { useState } from "react";
import "../../css/LoginForm.css";

function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="container py-5 my-5 d-flex justify-content-center align-items-center">
      <div className="loginForm my-5 d-flex justify-content-start align-items-center">
        <div className="loginContainer d-flex justify-content-center align-items-center flex-column">
          {isRegistering ? (
            <>
              <h2 className="fw-bold">Sign up</h2>
              <form className="flex-column py-4 d-flex justify-content-center align-items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="mt-3 p-2"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  className="mt-3 p-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-3 p-2"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="my-4 p-2"
                />
                <select className="fw-bold">
                  <option value="Your Role">Your Role</option>
                  <option value="FrontEnd Developer">FrontEnd Developer</option>
                  <option value="BackEnd Developer">BackEnd Developer</option>
                  <option value="FullStack Developer">
                    FullStack Developer
                  </option>
                  <option value="Designer">Designer</option>
                  <option value="Web Security">Web Security</option>
                </select>
                <button className="btn fw-bold text-white py-2 mt-3">
                  Sign up
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="fw-bold">Sign in</h2>
              <form className="flex-column py-4 d-flex justify-content-center align-items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-3 p-2"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="my-4 p-2"
                />
                <button className="btn fw-bold text-white py-2 mt-3">
                  Sign in
                </button>
              </form>
            </>
          )}
        </div>

        <div className="registerContainer d-flex justify-content-center align-items-center flex-column py-5">
          <h1 className="fw-bold text-white">
            {isRegistering ? "Welcome Back!" : "Hello, Friend"}
          </h1>
          <h4 className="mx-2 text-white text-center">
            {isRegistering
              ? "To keep connected with us, please login with your personal info"
              : "Enter your personal details and start your journey with us"}
          </h4>
          <button
            className="btn fw-bold text-white py-2 my-3"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Sign in" : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
