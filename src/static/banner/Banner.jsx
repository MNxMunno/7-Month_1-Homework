import React from "react";
import { Link } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";

const Banner = () => {
  const data = [
    {
      id: 1,
      title: "Eat as you want",
      img: "https://i.postimg.cc/k40LnB1K/about-img.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eius ut molestiae molestias debitis doloremque consequatur quas dolorum illum eum id velit, animi iusto iure. Sunt rem sapiente tempore asperiores!",
    },
  ];

  const card = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="img">
        <img src={el.img} alt={el.title} />
      </div>
      <div className="content">
        <h1>{el.title}</h1>
        <p>{el.desc}</p>
        <Link to={"/about"}>Learn More</Link>
      </div>
    </div>
  ));

  return (
    <section className="banner">
      <div className="container">
        <div className="banner__cards">{card}</div>
      </div>
    </section>
  );
};

export default Banner;
