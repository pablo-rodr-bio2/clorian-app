import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState([]);

  const handleFetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const data = await response.json();

      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

      setData(sortedData);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();

    handleFetchProducts();

    return () => {
      controller.abort();
    }
  }, [url, handleFetchProducts]);

  return {
    loading,
    error,
    products: data,
  }
}