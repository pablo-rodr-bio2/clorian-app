import { useCallback, useEffect, useState } from "react";
import { PRODUCTS_URL } from "../constants/db_urls";

export const useFetchSingleProduct = (productId) => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState(null);

  const handleFetchSingleProduct = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${PRODUCTS_URL}/${productId}`);
      const data = await response.json();

      setData(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    const controller = new AbortController();

    handleFetchSingleProduct();

    return () => {
      controller.abort();
    }
  }, [handleFetchSingleProduct]);

  return {
    loading,
    error,
    product: data,
  }
}