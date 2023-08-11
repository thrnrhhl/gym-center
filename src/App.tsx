import './App.css'
import { Header } from './widgets/header';
import { HeroSection } from './widgets/hero-section';
import { ProgrammSection } from './widgets/programm-section';
import { TranformSection } from './widgets/tranform-section';
import { JoinUsSection } from './widgets/join-us-section';
import { PricingSection } from './widgets/pricing-section';
import { CustomerSection } from './widgets/customer-section';
import { SubscribeSection } from './widgets/subscribe-section';
import { PreFooterSection } from './widgets/pre-footer-section';
import { Footer } from './widgets/footer';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <ProgrammSection />
      <TranformSection />
      <JoinUsSection />
      <PricingSection />
      <CustomerSection />
      <SubscribeSection />
      <PreFooterSection />
      <Footer />
    </>
  )
}

export default App
