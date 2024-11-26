import { useCallback, useEffect, useRef, useState } from "react";
import { PRODUCTS_URL } from "../constants/db_urls";

export const useFetchProducts = () => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState([]);

  const abortControllerRef = useRef(null)

  const handleFetchProducts = useCallback(async () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(PRODUCTS_URL, {
        signal: abortControllerRef.current?.signal,
      });
      const data = await response.json();
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