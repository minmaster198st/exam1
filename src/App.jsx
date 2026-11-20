import React from "react";
import Header from "./components/Header";
import Object from "./components/Object";
import Subject from "./components/Subject";
import objects from "./data/objects.json";
import subjects from "./data/subjects.json";
import "./style.css";

export default function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <span className="hero-label">FPT EDUCATION</span>
            <h1>HỌC LẬP TRÌNH<br />HỌC APTECH<br />HỌC TẠI FPT</h1>
          </div>
          <div className="hero-shapes" aria-hidden="true">
            <span>FPT<br />APTECH</span>
            <span>CODE<br />YOUR FUTURE</span>
            <span>LEARN<br />BY DOING</span>
          </div>
        </section>

        <section className="objects-section" id="objects">
          <h2>SHOULD WHO LEARN PROGRAMING IN FPT<br className="desktop-break" /> APTECH?</h2>
          <div className="object-grid">
            {objects.map((item) => <Object key={item.id} item={item} />)}
          </div>
        </section>

        <section className="subjects-section" id="subjects">
          <h2>WHAT IS THE COURSE PROGRAM?</h2>
          <div className="subject-grid">
            {subjects.map((item) => <Subject key={item.id} item={item} />)}
          </div>
          <p className="course-description">{subjects[0]?.description}</p>
        </section>
      </main>

      <footer className="footer" id="footer">
        <strong>FPT Aptech</strong>
        <span>Learn today, lead tomorrow.</span>
      </footer>
    </div>
  );
}
