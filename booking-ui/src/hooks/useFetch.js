import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  const reFetch = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(url);
      setData(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};

export default useFetch;
