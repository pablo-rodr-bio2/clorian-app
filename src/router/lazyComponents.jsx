import { lazy } from "react";

export const ProductsPage = lazy(() => import("../pages/ProductsPage/ProductsPage"));
export const ProductDetailsPage = lazy(() => import("../pages/ProductDetailsPage/ProductDetailsPage"));
export const ShoppingCartPage = lazy(() => import("../pages/ShoppingCartPage/ShoppingCartPage"));
