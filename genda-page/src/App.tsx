import { MotionConfig } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { Features } from './sections/Features'
import { ForWho } from './sections/ForWho'
import { Pricing } from './sections/Pricing'
import { CTA } from './sections/CTA'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <ForWho />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
