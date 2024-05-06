import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "../../api";

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, [id]);
  return (
    <>
      <Header />
      <main>
        <section className="single">
          <div className="container">
            <div className="cards">
              <div className="card">
                <img src={product?.url} alt="img" />
              </div>
              <div className="card">
                <h1>{product?.title}</h1>
                <p>{product?.description}</p>
                <b>
                  {product?.price} $ <del>{product?.price * 2} $</del>
                </b>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SingleRoute;
