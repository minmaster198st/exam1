import React from "react";

export default function Object({ item }) {
  return (
    <article className="object-card">
      <img src={item.image} alt={item.title} />
      <div className="object-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
