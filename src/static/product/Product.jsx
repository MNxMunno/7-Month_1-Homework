import React from "react";
import { Link } from "react-router-dom";

const Product = ({ data, loading, error }) => {
  const card = data?.map((el) => (
    <div key={el.id}>
      <Link to={"/singleRoute"}>
        <img src={el.img} alt={el.title} />
      </Link>
      <h2>{el.title}</h2>
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Product;
