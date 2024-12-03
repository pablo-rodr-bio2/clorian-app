import { ProductDetailsPage, ProductsPage, ShoppingCartPage } from "./lazyComponents";

export const RoutePath = {
  ROOT: "/",
  PRODUCT_DETAILS: "/product/:productId",
  SHOPPING_CART: "/shopping-cart"
}

export const RoutesMapping = {
  [RoutePath.ROOT]: <ProductsPage />,
  [RoutePath.PRODUCT_DETAILS]: <ProductDetailsPage />,
  [RoutePath.SHOPPING_CART]: <ShoppingCartPage />,
}