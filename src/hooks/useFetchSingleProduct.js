import { useQuery } from "@tanstack/react-query";

import { PRODUCTS_URL } from "../constants/db_urls";

const fetchSingleProduct = async (productId) => {
  const response = await fetch(`${PRODUCTS_URL}/${productId}`);
  return response.json();
}

export const useFetchSingleProduct = (productId) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchSingleProduct(productId),
    staleTime: Infinity,
  });

  return {
    product: data,
    isError,
    isLoading,
  }
}