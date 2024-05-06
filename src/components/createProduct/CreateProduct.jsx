import React, { useState } from "react";
import axios from "../../api";

const initalState = {
  title: "",
  description: "",
  price: "",
};

const CreateProduct = () => {
  const [data, setData] = useState(initalState);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/products", data)
      .then((res) => {
        console.log(res);
        setData(initalState);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="create__product">
      <div className="container">
        <div className="head">
          <h1>Create Product</h1>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              value={data.title}
              onChange={(e) =>
                setData((p) => ({ ...p, title: e.target.value }))
              }
              placeholder="Title..."
            />
            <input
              required
              type="text"
              value={data.description}
              onChange={(e) =>
                setData((p) => ({ ...p, description: e.target.value }))
              }
              placeholder="Description"
            />
            <input
              required
              type="number"
              value={data.price}
              onChange={(e) =>
                setData((p) => ({ ...p, price: e.target.value }))
              }
              placeholder="Price..."
            />
            <button>Create</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
