import React from "react";

export default function Card(props) {
  return (
    <div className="card border-radius">
      <img
        src="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Willempie-600x600.png"
        alt="Koningsdag sweater"
        className="card--img border-radius"
      />
      <div className="card--infocontainer">
        <h2 className="card--title">{props.title}</h2>
        <p className="card--text">{props.text}</p>
        <p className="card--price border-radius">€24,99</p>
        <button className="card--button">In winkelmand</button>
      </div>
    </div>
  );
}
