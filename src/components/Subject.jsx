import React from "react";

export default function Subject({ item }) {
  return (
    <div className="subject-item">
      <div className="subject-logo">
        <img src={item.image} alt={item.subject} />
      </div>
      <h3>{item.subject}</h3>
    </div>
  );
}
