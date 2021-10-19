import React from "react";

import AboutUs from "../About us/AboutUs";

import Doctors from "../Doctors/Doctors";
import Footer from "../Footer/Footer";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <h1>jfdsf</h1>
      <Services home={true}></Services>
      <Doctors></Doctors>

      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
