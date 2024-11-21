import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/contact";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <div className="Router">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
