import { Header } from './header'
import { HeroSection } from './hero-section'
import { MetricsBar } from './metrics-bar'
import { InfrastructureSection } from './infrastructure-section'
import { FeaturesSection } from './features-section'
import { ComplianceSection } from './compliance-section'
import { PricingSection } from './pricing-section'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />

      <MetricsBar />

      <InfrastructureSection />

      <FeaturesSection />

      <ComplianceSection />

      <PricingSection />

      <div className="w-full border-t border-edge">
        <div className="mx-auto max-w-6xl border-x border-edge h-16">
          <img
            src="/superdocs.svg"
            alt="Sent Logo"
            className="h-6 mx-auto my-5 opacity-50"
          />
        </div>
      </div>
    </div>
  )
}
