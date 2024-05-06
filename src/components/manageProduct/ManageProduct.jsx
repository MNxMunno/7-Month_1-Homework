import React, { useEffect, useState } from "react";
import axios from "../../api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageProduct = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, [reload]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      axios
        .delete(`/products/${id}`)
        .then((res) => {
          setReload((p) => !p);
          console.log(res);
          toast.success(`Deleted successfully`);
        })
        .catch((err) => console.error(err));
    }
  };

  let card = data?.data.map((el) => (
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
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="manage">
      <div className="container">
        <div className="head">
          <h1>Manage</h1>
        </div>
        <div className="content">
          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default ManageProduct;
