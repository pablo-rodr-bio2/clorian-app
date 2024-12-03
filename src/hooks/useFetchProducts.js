import { useQuery } from "@tanstack/react-query";
import { PRODUCTS_URL } from "../constants/db_urls";

const fetchProducts = async () => {
  const response = await fetch(PRODUCTS_URL);
  return response.json();
}

export const useFetchProducts = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  return {
    products: data,
    isError,
    isLoading,
  }
}