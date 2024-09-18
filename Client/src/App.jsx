import React from "react";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import SignIn from "./Components/Pages/SignIn";
import Navbar from "./Components/Pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { BlogProvider } from "./Components/Context/BlogContext";
import BlogDetail from "./Components/Pages/BlogDetail";
import './App.css'
const App = () => {
  return (
    <>
      <BlogProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
          </div>
        </Router>
      </BlogProvider>
    </>
  );
};

export default App;
