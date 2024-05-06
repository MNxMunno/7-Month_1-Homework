import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Product = ({ data, loading, error }) => {
  let card = data?.map((el) => (
    <div key={el.id} className="card">
      <Link to={`/products/${el.id}`}>
        <img src={el.url} alt={el.title} />
      </Link>
      <div className="content">
        <h2>{el.title}</h2>
        <p title={el.description} className="text">
          {el.description}
        </p>
        <div className="btns">
          <p className="price">
            {el.price} $ <del>{el.price * 2}$</del>
          </p>
          <button>
            <BsCart4 />
          </button>
        </div>
      </div>
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
