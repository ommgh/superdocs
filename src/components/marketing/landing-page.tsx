import { Header } from './header'
import { HeroSection } from './hero-section'
import { TeamsDisplay } from './metrics-bar'
import { InfrastructureSection } from './infrastructure-section'
import { FeaturesSection } from './features-section'
import { ComplianceSection } from './compliance-section'
import { PricingSection } from './pricing-section'
import { CtaSection } from './cta-section'
import { Footer } from './footer'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />

      <TeamsDisplay />

      <InfrastructureSection />

      <FeaturesSection />

      <ComplianceSection />

      <PricingSection />

      <CtaSection />

      <Footer />
    </div>
  )
}
