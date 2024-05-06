import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Product from "../../static/product/Product";

const Home = () => {
  let url = `/products`;
  const { data, loading, error } = useFetch(url);

  return (
    <>
      <Header />
      <main>
        <Product loading={loading} data={data} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
