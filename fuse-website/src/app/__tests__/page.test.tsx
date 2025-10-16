import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders without crashing', () => {
    // This test verifies that the main page component can be imported and rendered
    // without throwing any errors, which means the website loads successfully
    expect(() => render(<Home />)).not.toThrow()
  })

  it('has proper main element structure', () => {
    render(<Home />)
    
    const main = screen.getByRole('main')
    expect(main).toHaveClass('min-h-screen')
  })
})