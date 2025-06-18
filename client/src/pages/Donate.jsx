import React, { useState } from "react";
import axios from "axios";
import "../index.css"; // Link to custom CSS

function Donate() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDonate = async () => {
    if (!name.trim() || !amount.trim()) return alert("Please fill in all fields");
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/donate", { name, amount });
      setSuccess(true);
      setName("");
      setAmount("");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="donate-container">
      <div className="donate-card">
        <div className="donate-banner">
          <h1>Support Our Mission</h1>
        </div>

        <div className="donate-content">
          <p className="donate-message">
            Every rupee you give powers skill‑training, education and healthcare
            for women in underserved communities.
          </p>

          {success && (
            <div className="donate-success">
              Thank you for your generous donation! 💖
            </div>
          )}

          <label htmlFor="donorName">Your Name</label>
          <input
            id="donorName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Shwetha"
          />

          <label htmlFor="amount">Amount (₹)</label>
          <input
            id="amount"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="500"
          />

          <button onClick={handleDonate} disabled={loading}>
            {loading ? "Processing…" : "Donate Now"}
          </button>

          <p className="donate-note">
            100% of your contribution goes directly to program costs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Donate;
