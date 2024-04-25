import React from "react";
import Card from "./Card";

export default function Carousel() {
  return (
    <div className="carousel">
      <Card
        img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Willempie-600x600.png"
        title="Willempie Sweater"
        text="Dé koningsdag sweater die je moet hebben!"
        price="45,-"
      />
      <Card
        img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Koning-pils_wit.png"
        title="Koning Pils Sweater"
        text="Dit is echt de beste sweater!"
        price="34,-"
      />
      <Card
        img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_King-balk-600x600.png"
        title="King Sweater"
        text="Of is toch deze sweater de beste?"
        price="40,-"
      />
      <Card
        img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_LamLeveDeKoning_wit-600x600.png"
        title="Lam Leve De Koning Sweater"
        text="Nee het is echt deze!"
        price="38,-"
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
