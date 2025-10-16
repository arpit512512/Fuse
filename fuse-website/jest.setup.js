import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

// Mock Framer Motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => {
      // Filter out Framer Motion specific props
      const { whileHover, initial, animate, transition, ref, ...domProps } = props
      return <div {...domProps}>{children}</div>
    },
    h1: ({ children, ...props }) => {
      const { whileHover, initial, animate, transition, ref, ...domProps } = props
      return <h1 {...domProps}>{children}</h1>
    },
    p: ({ children, ...props }) => {
      const { whileHover, initial, animate, transition, ref, ...domProps } = props
      return <p {...domProps}>{children}</p>
    },
    span: ({ children, ...props }) => {
      const { whileHover, initial, animate, transition, ref, ...domProps } = props
      return <span {...domProps}>{children}</span>
    },
    section: ({ children, ...props }) => {
      const { whileHover, initial, animate, transition, ref, ...domProps } = props
      return <section {...domProps}>{children}</section>
    },
    path: ({ children, ...props }) => {
      const { whileHover, initial, animate, transition, ref, ...domProps } = props
      return <path {...domProps}>{children}</path>
    },
  },
  useInView: () => true,
  useReducedMotion: () => false,
  AnimatePresence: ({ children }) => children,
}))

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
