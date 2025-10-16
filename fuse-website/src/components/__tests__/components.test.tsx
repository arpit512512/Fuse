import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'
import { SilenceSection } from '@/components/sections/SilenceSection'
import { ArchitectureSection } from '@/components/sections/ArchitectureSection'
import { HorizonSection } from '@/components/sections/HorizonSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

describe('Website Components', () => {
  it('renders Hero component without errors', () => {
    render(<Hero />)
    
    // Check for key elements in Hero
    expect(screen.getByText(/Engineering Has Outgrown Human Bandwidth/)).toBeInTheDocument()
    expect(screen.getByText(/Fuse is your agentic counterpart/)).toBeInTheDocument()
    expect(screen.getByText(/Request a Demo/)).toBeInTheDocument()
    expect(screen.getByText(/Join Early Access/)).toBeInTheDocument()
  })

  it('renders SilenceSection component without errors', () => {
    render(<SilenceSection />)
    
    // Check for key elements
    expect(screen.getByText(/The Silence Between Systems/)).toBeInTheDocument()
    expect(screen.getByText(/Dashboards/)).toBeInTheDocument()
    expect(screen.getByText(/Transparency before action/)).toBeInTheDocument()
  })

  it('renders ArchitectureSection component without errors', () => {
    render(<ArchitectureSection />)
    
    // Check for key elements
    expect(screen.getByText(/Architecture of Attention/)).toBeInTheDocument()
    expect(screen.getByText(/Perception Agents/)).toBeInTheDocument()
    expect(screen.getByText(/Planner Agent/)).toBeInTheDocument()
    expect(screen.getByText(/Action Agent/)).toBeInTheDocument()
  })

  it('renders HorizonSection component without errors', () => {
    render(<HorizonSection />)
    
    // Check for key elements
    expect(screen.getByText(/The Cognitive Horizon/)).toBeInTheDocument()
    expect(screen.getByText(/human judgment meets machine context/)).toBeInTheDocument()
    expect(screen.getByText(/Read the Essay/)).toBeInTheDocument()
  })

  it('renders CTASection component without errors', () => {
    render(<CTASection />)
    
    // Check for key elements
    expect(screen.getByText(/Join the Founding Engineers Program/)).toBeInTheDocument()
    expect(screen.getByText(/Limited to 50 teams/)).toBeInTheDocument()
    expect(screen.getByText(/Join Early Access/)).toBeInTheDocument()
  })

  it('renders Footer component without errors', () => {
    render(<Footer />)
    
    // Check for key elements
    expect(screen.getByText(/Fuse — The adaptive agentic workspace for engineers/)).toBeInTheDocument()
    expect(screen.getByText(/© 2025 Fuse Technologies, Inc./)).toBeInTheDocument()
  })
})
