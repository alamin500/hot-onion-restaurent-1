import React from "react";
import dinner1 from "../../../images/Dinner/dinner1.png";
import dinner2 from "../../../images/Dinner/dinner2.png";
import dinner3 from "../../../images/Dinner/dinner3.png";
import dinner4 from "../../../images/Dinner/dinner4.png";
import dinner5 from "../../../images/Dinner/dinner5.png";
import dinner6 from "../../../images/Dinner/dinner6.png";
import Dinner from "../Dinner/Dinner";

const dinners = [
  {
    img: dinner1,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: dinner2,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: dinner3,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: dinner4,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: dinner5,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: dinner6,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
];
const Dinners = () => {
  return (
    <div className="container">
      <h1>Dinner</h1>
      <div className="row">
        {dinners.map((dinner) => (
          <Dinner key={dinner.price} dinner={dinner}></Dinner>
        ))}
      </div>
    </div>
  );
};

export default Dinners;
