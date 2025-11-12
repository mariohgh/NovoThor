import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Locations() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-32 bg-novothor-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-light mb-8">Locations</h1>
          <p className="text-xl opacity-80 mb-8">Find a NovoTHOR near you</p>
          <a href="/#contact" className="inline-block bg-novothor-red px-8 py-4 rounded hover:bg-red-700 transition">Red light bed near me</a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
