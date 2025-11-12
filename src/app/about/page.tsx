import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-32 bg-novothor-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-light mb-8">About</h1>
          <p className="text-xl opacity-80">Content coming soon...</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
