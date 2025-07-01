import React from "react";
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
  const event = eventData[eventId] || {
    name: "Sample Event",
    description: "This event empowers women through skill training and support.",
    date: "2025-07-01",
    impact: []
  };

  return (
    <div className="event-impact-container">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <h3>Impact</h3>
      <ul>
        {event.impact.map((item, idx) => (
          <li key={idx}>{item.label}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventImpact;
