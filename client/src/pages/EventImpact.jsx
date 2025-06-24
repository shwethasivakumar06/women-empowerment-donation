import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

// Dummy event data for demonstration
const eventData = {
  1: {
    name: "Skill Training for Women",
    description: "Vocational training session for tailoring and handicrafts.",
    date: "2025-07-01",
    impact: [
      { label: "Women Trained", value: 120 },
      { label: "Jobs Created", value: 45 },
      { label: "Workshops Held", value: 18 },
      { label: "Communities Reached", value: 7 }
    ]
  },
  2: {
    name: "Health & Hygiene Awareness",
    description: "Awareness drive on menstrual hygiene, nutrition, and cleanliness.",
    date: "2025-07-05",
    impact: [
      { label: "Women Reached", value: 200 },
      { label: "Health Kits Distributed", value: 150 },
      { label: "Sessions Held", value: 10 },
      { label: "Volunteers", value: 25 }
    ]
  },
  3: {
    name: "Entrepreneurship Workshop",
    description: "Learn how to build and manage small businesses with expert guidance.",
    date: "2025-07-10",
    impact: [
      { label: "Women Trained", value: 80 },
      { label: "Startups Launched", value: 12 },
      { label: "Mentors", value: 8 },
      { label: "Workshops", value: 5 }
    ]
  },
  4: {
    name: "Digital Literacy Camp",
    description: "Hands-on training on using smartphones, UPI, and basic apps.",
    date: "2025-07-15",
    impact: [
      { label: "Women Trained", value: 100 },
      { label: "Phones Distributed", value: 30 },
      { label: "Sessions", value: 7 },
      { label: "Communities", value: 3 }
    ]
  },
  5: {
    name: "Legal Rights & Safety Session",
    description: "Session on women's rights, self-defense, and helpline awareness.",
    date: "2025-07-20",
    impact: [
      { label: "Women Informed", value: 90 },
      { label: "Helpline Cards Given", value: 90 },
      { label: "Self-defense Classes", value: 4 },
      { label: "Lawyers Present", value: 2 }
    ]
  },
  6: {
    name: "Education for All",
    description: "Campaign for enrolling girls in schools and continuing education.",
    date: "2025-07-25",
    impact: [
      { label: "Girls Enrolled", value: 60 },
      { label: "Schools Partnered", value: 5 },
      { label: "Scholarships", value: 10 },
      { label: "Awareness Drives", value: 3 }
    ]
  }
};

function EventImpact() {
  const { eventId } = useParams();
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);
  const [language, setLanguage] = useState("en");
  const [translated, setTranslated] = useState(null);

  const event = eventData[eventId] || {
    name: "Sample Event",
    description: "This event empowers women through skill training and support.",
    date: "2025-07-01",
    impact: []
  };

  // Simulated translation function (replace with real API call)
  const translateText = (text, lang) => {
    const translations = {
      hi: "(हिंदी में अनुवादित)",
      ta: "(தமிழில் மொழிபெயர்க்கப்பட்டது)",
      ml: "(മലയാളത്തിൽ വിവർത്തനം ചെയ്തത്)",
      kn: "(ಕನ್ನಡದಲ್ಲಿ ಅನುವಾದಿಸಲಾಗಿದೆ)",
      te: "(తెలుగులో అనువదించబడింది)",
      en: ""
    };
    return text + " " + (translations[lang] || "");
  };

  const handleTranslate = () => {
    setTranslated({
      name: translateText(event.name, language),
      description: translateText(event.description, language),
      date: event.date,
      impact: event.impact.map(item => ({
        label: translateText(item.label, language),
        value: item.value
      }))
    });
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setTranslated(null); // Reset translation when language changes
  };

  const displayEvent = translated || event;

  const handleDonate = () => {
    window.location.href = "/donate?program=" + encodeURIComponent(event.name);
  };

  return (
    <div className="event-impact-container">
      
      <h2>{displayEvent.name}</h2>
      <p><strong>Date:</strong> {displayEvent.date}</p>
      <p>{displayEvent.description}</p>
      <h3>Event Impact</h3>
      <div className="impact-visualization">
        {displayEvent.impact && displayEvent.impact.length > 0 ? (
          displayEvent.impact.map((item, idx) => (
            <div key={idx} className="impact-bar">
              <span>{item.label}</span>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: `${item.value}%` }}></div>
              </div>
              <span className="bar-value">{item.value}</span>
            </div>
          ))
        ) : (
          <div style={{ color: 'gray', fontStyle: 'italic' }}>No impact data available.</div>
        )}
      </div>
      <div className="event-donate-form">
        <h4>Join & Donate for this Event</h4>
        <button onClick={handleDonate}>Donate for this Event</button>
      </div>
    </div>
  );
}

export default EventImpact;
