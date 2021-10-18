import React from "react";
import "./Service.css";

const Service = ({ services }) => {
  const { img, service, catagory } = services;
  return (
    <div className="col-12 col-sm-6 col-lg-3 service-card">
      <img src={img} alt="" />
      <h3>{service}</h3>
      <p>In {catagory}</p>
    </div>
  );
};

export default Service;
