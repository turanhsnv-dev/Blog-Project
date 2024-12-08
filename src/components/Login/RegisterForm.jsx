import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterForm = ({ navigate, setIsRegistering }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (err) {
        console.error("Kullanıcılar yüklenemedi:", err);
      }
    };
    fetchUsers();
  }, []);

  const registerPost = async (e) => {
    e.preventDefault();
    if (!name || !surname || !username || !email || !password || role === 'Your Role') {
      alert("Bütün Xanaları Doldurun...")
      return;
    }

    const existingUser = users.find((user) => user.username === username || user.email === email);

    if (existingUser) {
      setError("Eyni istifadəçi adı və ya e-poçt artıq mövcuddur.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/users", {
        name,
        surname,
        username,
        email,
        password,
        role
      });
      alert("Qeydiyyat Ugurlu Oldu..");

      setUsers((prevUsers) => [...prevUsers, responsedata]);

      setName("");
      setSurName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setRole("Your Role");
      setIsRegistering(false);
      navigate("/loginform");
    } catch (error) {
      console.error("User Data Cekilmedi", error);
    }
  };
  return (
    <div>
      <h2 className="fw-bold">Sign up</h2>
      <form
        className="flex-column py-4 d-flex justify-content-center align-items-center"
        onSubmit={registerPost}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="mt-3 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="mt-3 p-2"
          value={surname}
          onChange={(e) => setSurName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mt-3 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="mt-3 p-2"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="my-4 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select className="fw-bold"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Your Role">Your Role</option>
          <option value="FrontEnd Developer">FrontEnd Developer</option>
          <option value="BackEnd Developer">BackEnd Developer</option>
          <option value="FullStack Developer">FullStack Developer</option>
          <option value="Designer">Designer</option>
          <option value="Web Security">Web Security</option>
        </select>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="btn fw-bold text-white py-2 mt-3" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
