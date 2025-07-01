
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Donate from "./pages/Donate";
import EventImpact from "./pages/EventImpact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem("loggedIn") === "true");

  // Google Translate loader: load only once for the whole app
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,ta,te,kn,ml,bn,gu,mr,pa,ur,or,ne,fr,de,es,ar,zh-CN,ja,ko,ru",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      };
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Router basename="/">
      <div className="p-4 max-w-xl mx-auto">
        {/* Show nav only if authenticated and not on /signup or /login */}
        {isAuthenticated && !["/signup", "/login"].includes(window.location.pathname) && (
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/donate">Donate</Link>
            {/* Google Translate widget in navbar */}
            <div id="google_translate_element" style={{ marginLeft: 'auto' }}></div>
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
          <Route path="/" element={
            isAuthenticated ? <Home /> : <Navigate to="/signup" replace />
          } />
          <Route path="/programs" element={isAuthenticated ? <Programs /> : <Navigate to="/signup" replace />} />
          <Route path="/donate" element={isAuthenticated ? <Donate /> : <Navigate to="/signup" replace />} />
          <Route path="/event/:eventId" element={isAuthenticated ? <EventImpact /> : <Navigate to="/signup" replace />} />
          {/* Redirect any unknown route to /signup */}
          <Route path="*" element={<Navigate to="/signup" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
