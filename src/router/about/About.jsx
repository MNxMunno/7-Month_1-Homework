import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <h1
        style={{
          paddingTop: "90px",
          textAlign: "center",
          color: "blue",
          fontFamily: "sans-serif",
        }}
      >
        About Us
      </h1>
      <Footer />
    </>
  );
};

export default About;
