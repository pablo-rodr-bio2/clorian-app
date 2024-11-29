import { MemoryRouter } from "react-router-dom";
import ProductList from "./ProductList";
import { render, screen } from "@testing-library/react";

describe('ProductsList', () => {
  describe('when passed products', () => {
    it('renders all of them', () => {
      const products = [
        { id: 1, name: 'Product 1', description: 'Description 1', cost: 10 },
        { id: 2, name: 'Product 2', description: 'Description 2', cost: 20 },
        { id: 3, name: 'Product 3', description: 'Description 3', cost: 30 },
      ];

      render(
        <MemoryRouter>
          <ProductList products={products} />
        </MemoryRouter>
      )

      const productCards = screen.getAllByTestId('product-card-root');
      expect(productCards).toHaveLength(products.length);
    })
  })

  describe('when passed no products', () => {
    it('renders nothing', () => {
      render(
        <MemoryRouter>
          <ProductList products={[]} />
        </MemoryRouter>
      )

      const productCards = screen.queryAllByTestId('product-card-root');
      expect(productCards).toHaveLength(0);
    })
  })
})