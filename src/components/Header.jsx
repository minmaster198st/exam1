import React from "react";

export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="#">
        <span className="brand-mark">♦</span>
        <span>FPT Aptech</span>
      </a>
      <nav className="nav">
        <a href="#about">About Us</a>
        <a href="#subjects">Products</a>
        <a href="#objects">Booking</a>
        <a href="#footer">Locations</a>
      </nav>
      <div className="header-actions">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
}
