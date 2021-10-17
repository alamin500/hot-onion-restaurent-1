import React from "react";
import "./Dinner.css";

const Dinner = ({ dinner }) => {
  const { name, img, describe, price } = dinner;
  console.log(dinner);
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <img className="dinner-img" src={img} alt="" />
      <h3>{name}</h3>
      <p> {describe}</p>
      <h5 className="text-danger">{price}</h5>
    </div>
  );
};

export default Dinner;
