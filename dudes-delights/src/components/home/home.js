import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Dude's Delights</h1>
        <p className="hero-subtitle">Delicious macarons for every occasion</p>
      </div>
      <div className="search-section">
        <textarea
          className="search-bar"
          placeholder="Search for macarons (e.g., Chocolate, Pistachio)"
        ></textarea>
        <button className="search-button">Search</button>
      </div>
      <div className="macaron-display">
        <div className="rotating-macaron">
          <img
            src="images/macaron.png"
            alt="Rotating Macaron"
            className="macaron-image"
          />
        </div>
        <p className="tagline">
          Indulge in the sweetest treats—crafted with love and perfection!
        </p>
      </div>
    </div>
  );
}

export default Home;