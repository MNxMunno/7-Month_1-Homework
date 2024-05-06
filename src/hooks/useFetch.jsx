import axios from "../api";
import React, { useEffect, useState } from "react";

const useFetch = (api, ...rest) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(api)
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [...rest]);

  return { data, loading, error };
};

export default useFetch;
