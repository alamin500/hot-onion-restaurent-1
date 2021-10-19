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
    name: "Dr. Michael Linden",
    describe: "Throat Specialist",
    phone: "018878789798",
  },
  {
    img: doctor2,
    name: "HDr. Max Turner",
    describe: "Cardiologist",
    phone: "019888787878",
  },
  {
    img: doctor3,
    name: "Dr. Amy Adams",
    describe: "Rehabilitation Therapy",
    phone: "01739898893",
  },
  {
    img: doctor4,
    name: "Dr. Nick Sims",
    describe: "Outpatient Surgery",
    phone: "018938398498",
  },
  {
    img: doctor5,
    name: "Dr. Michael Linden",
    describe: "Cardiac Clinic",
    phone: "0168973778",
  },
  {
    img: doctor6,
    name: "Dr. Max Turner",
    describe: "Ophthalmology Clinic",
    phone: "01387877894",
  },
  {
    img: doctor7,
    name: "Dr. Amy Adams",
    describe: "Gynaecological Clinic",
    phone: "01687798980",
  },
  {
    img: doctor8,
    name: "Dr. Julia Jameson",
    describe: "Outpatient Rehabilitation",
    phone: "01776768978",
  },
];
const Doctors = () => {
  return (
    <div className="container">
      <div className="row g-2">
        <h1 style={{ textAlign: "left" }}>Doctors</h1>
        {doctors.map((doctor) => (
          <Doctor key={doctor.name} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
