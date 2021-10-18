import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="row g-5 p-5">
        {services.map((service) => (
          <Service key={service.id} services={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
