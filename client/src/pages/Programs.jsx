import React, { useEffect, useState } from "react";
import "../index.css";

// Importing local images
import bannerImage from "../assets/hello.jpg";
import eventImage1 from "../assets/hello1..jpg";
import eventImage2 from "../assets/women1.jpg";
import eventImage3 from "../assets/women2.jpg";
import eventImage4 from "../assets/women3.jpg";
import eventImage5 from "../assets/hello.jpg";
import eventImage6 from "../assets/women1.jpg";

function Programs() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const dummyEvents = [
      {
        id: 1,
        name: "Skill Training for Women",
        date: "2025-07-01",
        description: "Vocational training session for tailoring and handicrafts.",
        image: eventImage1
      },
      {
        id: 2,
        name: "Health & Hygiene Awareness",
        date: "2025-07-05",
        description: "Awareness drive on menstrual hygiene, nutrition, and cleanliness.",
        image: eventImage2
      },
      {
        id: 3,
        name: "Entrepreneurship Workshop",
        date: "2025-07-10",
        description: "Learn how to build and manage small businesses with expert guidance.",
        image: eventImage3
      },
      {
        id: 4,
        name: "Digital Literacy Camp",
        date: "2025-07-15",
        description: "Hands-on training on using smartphones, UPI, and basic apps.",
        image: eventImage4
      },
      {
        id: 5,
        name: "Legal Rights & Safety Session",
        date: "2025-07-20",
        description: "Session on women's rights, self-defense, and helpline awareness.",
        image: eventImage5
      },
      {
        id: 6,
        name: "Education for All",
        date: "2025-07-25",
        description: "Campaign for enrolling girls in schools and continuing education.",
        image: eventImage6
      }
    ];
    setEvents(dummyEvents);
  }, []);

  const joinEvent = (eventId) => {
    if (!name) return alert("Please enter your name before joining.");
    alert(`Successfully joined the event: ${eventId}`);
    setName("");
  };

  return (
    <div className="programs-container">
      <header className="programs-header">
        <img src={bannerImage} alt="Women Empowerment Banner" className="banner-img" />
        <div className="header-overlay">
          <h1>Empowering Women, Building Futures</h1>
          <p>Join our initiatives and be part of the change in your community.</p>
        </div>
      </header>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your name to join"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <section className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-img" />
            <div className="event-details">
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <button onClick={() => joinEvent(event.id)}>Join Event</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Programs;
