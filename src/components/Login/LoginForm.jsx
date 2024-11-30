import React, { useEffect, useState } from "react";
import "../../css/LoginForm.css";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error Data", error);
      }
    };
    fetchData();
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username);
    if (user) {
      if (user.password === password) {
        alert("login succesful");
        navigate("/");
      } else {
        alert("password error");
      }
    } else {
      alert("login error");
    }
  };
  return (
    <div className="container py-5 my-5 d-flex justify-content-center align-items-center">
      <div className="loginForm my-5 d-flex justify-content-start align-items-center">
        <div className="loginContainer d-flex justify-content-center align-items-center flex-column">
          {isRegistering ? (
            <>
              <RegisterForm
                navigate={navigate}
                setIsRegistering={setIsRegistering}
              />
            </>
          ) : (
            <>
              <h2 className="fw-bold">Sign in</h2>
              <form className="flex-column py-4 d-flex justify-content-center align-items-center" onSubmit={handleSignIn}>
                <input
                  type="name"
                  name="username"
                  value={username}
                  placeholder="Username"
                  className="mt-3 p-2"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  className="my-4 p-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn fw-bold text-white py-2 mt-3">
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
