import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Contact from "./Contact";
import Layout from "./Layout";
import About from "./About";
import Blog from "./Blog";
import Category from "./Category";

function App() {
  return (
    <div className="Router">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/About" element={<About />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/category" element={<Category />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
