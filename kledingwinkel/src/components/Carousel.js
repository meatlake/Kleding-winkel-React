import React from "react";
import Card from "./Card";

export default function Carousel() {
  return (
    <div className="carousel">
      <Card
        title="Koningsdag sweater 1"
        text="Dé koningsdag sweater die je moet hebben!"
        price="€24,99"
      />
      <Card
        title="Koningsdag sweater 2"
        text="Dit is echt de beste sweater!"
        price="€24,99"
      />
      <Card
        title="Koningsdag sweater 3"
        text="Of is toch deze sweater de beste?"
        price="€24,99"
      />
      <Card
        title="Koningsdag sweater 4"
        text="Nee het is echt deze!"
        price="€24,99"
      />
      {/* <Card
        title="Koningsdag sweater 5"
        text="Dé koningsdag sweater die je moet hebben!"
        price="€24,99"
      />
      <Card
        title="Koningsdag sweater 6"
        text="Dé koningsdag sweater die je moet hebben!"
        price="€24,99"
      /> */}
    </div>
  );
}
