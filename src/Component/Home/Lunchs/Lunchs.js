import React from "react";
import lunch1 from "../../../images/lunch/lunch1.png";
import lunch2 from "../../../images/lunch/lunch2.png";
import lunch3 from "../../../images/lunch/lunch3.png";
import lunch4 from "../../../images/lunch/lunch4.png";
import lunch5 from "../../../images/lunch/lunch5.png";
import lunch6 from "../../../images/lunch/lunch6.png";
import Lunch from "../Lunch/Lunch";

const lunchs = [
  {
    img: lunch1,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: lunch2,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: lunch3,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: lunch4,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: lunch5,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: lunch6,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
];
const Lunchs = () => {
  return (
    <div className="container">
      <h1>Lunch</h1>
      <div className="row">
        {lunchs.map((lunch) => (
          <Lunch key={lunch.describe} lunch={lunch}></Lunch>
        ))}
      </div>
    </div>
  );
};

export default Lunchs;
