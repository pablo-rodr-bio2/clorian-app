import { useCallback, useEffect, useState } from "react";
import { PRODUCTS_URL } from "../constants/db_urls";

export const useFetchProducts = () => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState([]);

  const handleFetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(PRODUCTS_URL);
      const data = await response.json();

      // const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

      setData(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    handleFetchProducts();

    return () => {
      controller.abort();
    }
  }, [handleFetchProducts]);

  return {
    loading,
    error,
    products: data,
  }
}