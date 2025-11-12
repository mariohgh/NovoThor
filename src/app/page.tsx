import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import SportsSection from '@/components/SportsSection'
import MilitarySection from '@/components/MilitarySection'
import ProvenSection from '@/components/ProvenSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <SportsSection />
      <MilitarySection />
      <ProvenSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
