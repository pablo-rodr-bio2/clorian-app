import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import ShoppingCartSection from "./ShoppingCartSection";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => ({
      cartEmpty: "Your shopping cart is empty",
    }[key]),
  }),
}));

vi.mock("../ShoppingCartSummary/ShoppingCartSummary", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-shopping-cart-summary">Mock Summary</div>,
}));

describe("ShoppingCartSection", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("when shopping cart is empty", () => {
    it("renders the empty message", () => {
      const emptyShoppingCart = { products: [] };

      render(<ShoppingCartSection shoppingCart={emptyShoppingCart} />);

      expect(screen.getByText("Your shopping cart is empty")).toBeInTheDocument();
    });
  });

  describe("when shopping cart has products", () => {
    it("renders the shopping cart root", () => {
      const shoppingCart = {
        products: [
          { product: { id: 1, name: "Product 1", cost: 10 }, quantity: 1, subtotal: 10 },
        ],
      };

      render(
        <ShoppingCartSection shoppingCart={shoppingCart} />
      );

      expect(screen.getByTestId("shopping-cart-root")).toBeInTheDocument();
    });
  });
});
