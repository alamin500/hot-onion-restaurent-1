import React from "react";
import breakfast1 from "../../../images/Breakfast/breakfast1.png";
import breakfast2 from "../../../images/Breakfast/breakfast2.png";
import breakfast3 from "../../../images/Breakfast/breakfast3.png";
import breakfast4 from "../../../images/Breakfast/breakfast4.png";
import breakfast5 from "../../../images/Breakfast/breakfast5.png";
import breakfast6 from "../../../images/Breakfast/breakfast6.png";
import Breakfast from "../Breakfast/Breakfast";

const breakfasts = [
  {
    img: breakfast1,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: breakfast2,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: breakfast3,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: breakfast4,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: breakfast5,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: breakfast6,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
];
const Breakfasts = () => {
  return (
    <div className="container">
      <h1>Breakfast</h1>
      <div className="row">
        {breakfasts.map((breakfast) => (
          <Breakfast key={breakfast.name} breakfast={breakfast}></Breakfast>
        ))}
      </div>
    </div>
  );
};

export default Breakfasts;
