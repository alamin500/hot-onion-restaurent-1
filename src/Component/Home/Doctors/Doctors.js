import React from "react";
import doctor1 from "../../../images/Doctor/doctor1.jfif";
import doctor2 from "../../../images/Doctor/doctor2.jfif";
import doctor3 from "../../../images/Doctor/doctor3.jfif";
import doctor4 from "../../../images/Doctor/doctor4.jfif";
import doctor5 from "../../../images/Doctor/doctor5.jfif";
import doctor6 from "../../../images/Doctor/doctor6.jfif";
import doctor7 from "../../../images/Doctor/doctor7.jfif";
import doctor8 from "../../../images/Doctor/doctor8.jfif";
import Doctor from "../Doctor/Doctor";

const doctors = [
  {
    img: doctor1,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: doctor2,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: doctor3,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: doctor4,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: doctor5,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: doctor6,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: doctor7,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
  {
    img: doctor8,
    name: "Healthy Meal Plan",
    describe: "How to make delicious food at home.",
    price: "$33",
  },
];
const Doctors = () => {
  return (
    <div className="container">
      <h1>Doctors</h1>
      <div className="row g-5">
        {doctors.map((doctor) => (
          <Doctor key={doctor.name} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
