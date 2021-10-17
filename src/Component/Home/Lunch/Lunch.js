import React from "react";
import "./Lunch.css";

const Lunch = ({ lunch }) => {
  const { name, img, describe, price } = lunch;
  console.log(lunch);
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <img className="lunch-img" src={img} alt="" />
      <h3>{name}</h3>
      <p> {describe}</p>
      <h5 className="text-danger">{price}</h5>
    </div>
  );
};

export default Lunch;
