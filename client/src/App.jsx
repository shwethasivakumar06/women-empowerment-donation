import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Donate from "./pages/Donate";
import './index.css'; 

function App() {
  return (
    <Router>
      <div className="p-4 max-w-xl mx-auto">
        
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/programs">Programs</Link>
      <Link to="/donate">Donate</Link>
    </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
