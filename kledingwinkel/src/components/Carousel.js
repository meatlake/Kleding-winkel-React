import React from "react";
import Card from "./Card";

export default function Carousel() {
  return (
    <div className="carousel">
      <Card
        img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Willempie-600x600.png"
        title="Koningsdag sweater 1"
        text="Dé koningsdag sweater die je moet hebben!"
        price="€24,99"
      />
      <Card
        img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Koning-pils_wit.png"
        title="Koningsdag sweater 2"
        text="Dit is echt de beste sweater!"
        price="€24,99"
      />
      <Card
        img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Koning-pils_wit.png"
        title="Koningsdag sweater 3"
        text="Of is toch deze sweater de beste?"
        price="€24,99"
      />
      <Card
        img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Koning-pils_wit.png"
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
