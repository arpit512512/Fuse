import { render } from '@testing-library/react'
import Home from '@/app/page'

describe('Website Integration Tests', () => {
  it('renders all main sections without errors', () => {
    // This test verifies that the main page can render all sections
    // without throwing any runtime errors
    const { container } = render(<Home />)
    
    // Check that the main container is rendered
    expect(container.querySelector('main')).toBeInTheDocument()
    
    // Check that the main has the correct class
    expect(container.querySelector('main')).toHaveClass('min-h-screen')
  })

  it('can import and render the page component', () => {
    // This test verifies that the page component can be imported
    // and rendered without any import or compilation errors
    expect(() => {
      const { unmount } = render(<Home />)
      unmount()
    }).not.toThrow()
  })
})
