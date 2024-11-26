import React, { useState } from "react";
import "../../css/LoginForm.css";
import RegisterForm from "./RegisterForm";
function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false);


  return (
    <div className="container py-5 my-5 d-flex justify-content-center align-items-center">
      <div className="loginForm my-5 d-flex justify-content-start align-items-center">
        <div className="loginContainer d-flex justify-content-center align-items-center flex-column">
          {isRegistering ? (
            <>
              <RegisterForm/>
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
