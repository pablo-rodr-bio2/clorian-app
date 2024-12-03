import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { RoutePath, RoutesMapping } from "./config";
import SuspenseWrapper from "./components/SuspenseWrapper/SuspenseWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SuspenseWrapper>{RoutesMapping[RoutePath.ROOT]}</SuspenseWrapper>,
      },
      {
        path: "product/:productId",
        element: <SuspenseWrapper>{RoutesMapping[RoutePath.PRODUCT_DETAILS]}</SuspenseWrapper>,
      },
      {
        path: "shopping-cart",
        element: <SuspenseWrapper>{RoutesMapping[RoutePath.SHOPPING_CART]}</SuspenseWrapper>,
      }
    ]
  },

])