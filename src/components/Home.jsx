import React from "react";
import "./Home.css";                  
import bgImage from '../assets/zebra_print_background.jpg';
import ContentBox from "./ContentBox";

export default function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="home-header">
        <div className="left-nav">
          <button className="nav-btn">Home</button>
        </div>
        <div className="right-nav">
          <button className="nav-btn">Work</button>
          <button className="nav-btn">Shop</button>
          <button className="nav-btn">About</button>
          <button className="nav-btn">Contact</button>
        </div>
      </header>
      <main style={{ height: '100vh' }}><ContentBox /></main>
    </div>
  );
}