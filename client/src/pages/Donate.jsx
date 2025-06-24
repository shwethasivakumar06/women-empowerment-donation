import React, { useState } from "react";
import "../index.css";

const programs = [
  "Skill Training for Women",
  "Health & Hygiene Awareness",
  "Entrepreneurship Workshop",
  "Digital Literacy Camp",
  "Legal Rights & Safety Session",
  "Education for All"
];

function getInitialProgram() {
  const params = new URLSearchParams(window.location.search);
  return params.get("program") || programs[0];
}

function Donate() {
  // Replace with your Google Form link and UPI details
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSezOJiW7OF2_vh5-hesXafkvRT5VnZQO1_yNizS0ow71OemwA/viewform?usp=dialog"; // <-- Replace with your actual Google Form link
  const upiId = "shwethasivakumar9@oksbi";
  const upiQrImage = require("../assets/qr.jpg"); // Place your QR code in assets/qr.jpg
  const [selectedProgram, setSelectedProgram] = useState(getInitialProgram());

  return (
    <div className="donate-container">
      <div className="donate-card">
        <div className="donate-banner">
          <h1>Support Our Mission</h1>
        </div>
        <div className="donate-content">
          <p className="donate-message">
            Every rupee you give powers skill-training, education, and healthcare
            for women in underserved communities.
          </p>
          <h3>Step 1: Choose a Program</h3>
          <select value={selectedProgram} onChange={e => setSelectedProgram(e.target.value)} style={{width:'100%',padding:'10px',marginBottom:'18px',borderRadius:'8px'}}>
            {programs.map((prog, idx) => (
              <option key={idx} value={prog}>{prog}</option>
            ))}
          </select>
          <h3>Step 2: Fill the Donor Details</h3>
          <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
            <button style={{ padding: "10px 20px", fontSize: "16px", marginBottom: 20 }}>
              Fill Google Form
            </button>
          </a>
          <h3>Step 3: Make Your Donation</h3>
          <p>UPI ID: <strong>{upiId}</strong></p>
          <p>Scan the QR code below using any UPI app (GPay, PhonePe, Paytm, etc.)</p>
          <img src={upiQrImage} alt="UPI QR" style={{ width: 200, marginBottom: 20 }} />
          <p className="donate-note">
            100% of your contribution goes directly to program costs.<br/>
            Please fill the form and make the payment to help us send you a receipt.<br/>
            <b>Selected Program:</b> {selectedProgram}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Donate;
