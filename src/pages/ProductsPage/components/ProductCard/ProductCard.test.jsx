import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { MemoryRouter } from 'react-router-dom';

const mockProduct = { id: 1, name: 'Test Product', description: 'Test Description', cost: 100 }

describe('ProductCard', () => {
  it('renders all product data', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.cost}`)).toBeInTheDocument();
  });

  it('renders the correct link to the product details page', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: mockProduct.name });
    expect(linkElement).toHaveAttribute('href', `/product/${mockProduct.id}`);
  })
});
