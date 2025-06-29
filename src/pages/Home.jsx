import React from "react";
import Hero from "../components/Hero";
import FeaturedSecion from "../components/FeaturedSecion";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSecion />
      <Banner />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
