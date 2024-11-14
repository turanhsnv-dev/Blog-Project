import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div className="Router">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
