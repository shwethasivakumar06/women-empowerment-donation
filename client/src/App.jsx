import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Donate from "./pages/Donate";
import EventImpact from "./pages/EventImpact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './index.css';

function App() {
  const [showTranslate, setShowTranslate] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem("loggedIn") === "true");

  useEffect(() => {
    if (showTranslate && !scriptLoaded) {
      // Add the init function
      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,ta,te,kn,ml,bn,gu,mr,pa,ur,or,as,ne,sd,si,fr,de,es,zh,ar',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          'google_translate_element'
        );
      };

      // Dynamically load the script
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
       // Set loaded state
      document.body.appendChild(script);
    }
    setIsAuthenticated(localStorage.getItem("loggedIn") === "true");
  }, [showTranslate, scriptLoaded]);

  return (
    <Router>
      <div className="p-4 max-w-xl mx-auto">
        {/* 🌐 Change Language Button */}
        <button
          onClick={() => setShowTranslate(true)}
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            zIndex: 9999,
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🌐 Change Language
        </button>
        {/* Show widget after script is loaded */}
        {showTranslate && (
          <div
            id="google_translate_element"
            style={{
              position: 'fixed',
              top: 50,
              right: 10,
              zIndex: 9999,
              background: '#fff',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(25,118,210,0.13)',
              padding: '8px 12px'
            }}
          ></div>
        )}
        {/* Navigation only if authenticated */}
        {isAuthenticated && (
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/donate">Donate</Link>
            <button
              style={{ marginLeft: 16, background: '#e53935', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 12px', cursor: 'pointer' }}
              onClick={() => {
                localStorage.removeItem('loggedIn');
                setIsAuthenticated(false);
              }}
            >Logout</button>
          </nav>
        )}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/programs" element={isAuthenticated ? <Programs /> : <Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/donate" element={isAuthenticated ? <Donate /> : <Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/event/:eventId" element={isAuthenticated ? <EventImpact /> : <Login onLogin={() => setIsAuthenticated(true)} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
