import React from "react";
import "./Breakfast.css";

const Breakfast = ({ breakfast }) => {
  const { name, img, describe, price } = breakfast;
  console.log(breakfast);
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <img className="breakfast-img" src={img} alt="" />
      <h3>{name}</h3>
      <p> {describe}</p>
      <h5 className="text-danger">{price}</h5>
    </div>
  );
};

export default Breakfast;
