import { render, screen } from '@testing-library/react'

import ProductDetailsSection from './ProductDetailsSection'
import { vi } from 'vitest'
import { useDispatch } from 'react-redux'

vi.mock('react-redux', () => ({
  useDispatch: vi.fn()
}))

const mockProduct ={
  id: 1,
  name: "Test Product",
  description: "Test Description",
  cost: 100,
  validity: new Date().toISOString(),
}

describe('ProductDetailsSection', () => {
  describe('when passed a product', () => {
    it('renders all the details', () => {
      render(<ProductDetailsSection product={mockProduct} />)
      
      expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
      expect(screen.getByText(new RegExp(`${mockProduct.description}`, 'i'))).toBeInTheDocument()
      expect(screen.getByText(new RegExp(`${mockProduct.cost}`, 'i'))).toBeInTheDocument()
    })
  })
})