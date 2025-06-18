import React, { useEffect } from "react";
import "../index.css";
import videoBg from "../assets/intro.mp4";
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";

function Home() {
  useEffect(() => {
    // Prevent loading the script multiple times
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
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="home-wrapper">
      {/* Language selector (only one will be loaded due to check above) */}
      <div
        id="google_translate_element"
        style={{ textAlign: "right", padding: "10px" }}
      ></div>

      <header className="video-header">
        <video autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>Empowering Women. Transforming Lives.</h1>
          <p>Join us in building a just and inclusive society.</p>
        </div>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We aim to uplift marginalized women and children by providing
          education, healthcare, legal aid, and life skills.
        </p>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <div className="cards">
          <div className="card">
            <h3>🌟 12,000+ Women Empowered</h3>
            <p>
              Trained in financial literacy, entrepreneurship, and education.
            </p>
          </div>
          <div className="card">
            <h3>🧕 500+ Programs</h3>
            <p>
              Health, safety, education, and empowerment sessions across India.
            </p>
          </div>
          <div className="card">
            <h3>🤝 900+ Volunteers</h3>
            <p>
              Community-driven initiatives powered by passionate supporters.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2>Moments of Change</h2>
        <div className="images">
          <img src={women1} alt="empowerment1" />
          <img src={women2} alt="empowerment2" />
          <img src={women3} alt="empowerment3" />
        </div>
      </section>

      <section className="cta">
        <h2>Be Part of the Movement</h2>
        <p>Support us through donations, volunteering, and advocacy.</p>
        <button onClick={() => (window.location.href = "/donate")}>
          Join Now
        </button>
      </section>
    </div>
  );
}

export default Home;
