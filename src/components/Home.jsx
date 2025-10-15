import React from "react";
import "./Home.css";                  
import bgImage from '../assets/zebra_print_background.jpg';
import ContentBox from "./ContentBox";

export default function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="home-header">
        <div className="left-nav">
          <a href="/home"><button className="nav-btn">Home</button></a>
        </div>
        <div className="right-nav">
          <a href="/work"><button className="nav-btn">Work</button></a>
          <a href="/shop"><button className="nav-btn">Shop</button></a>
          <a href="/about"><button className="nav-btn">About</button></a>
          <a href="/contact"><button className="nav-btn">Contact</button></a>
        </div>
      </header>
      <main style={{ height: '100vh' }}><ContentBox /></main>
    </div>
  );
}