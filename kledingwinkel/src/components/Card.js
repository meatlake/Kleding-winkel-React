import React from "react";

export default function Card(props) {
  return (
    <div className="card border-radius">
      <img
        src={props.img}
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
