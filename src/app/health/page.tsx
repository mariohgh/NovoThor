import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Health() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <Image src="/images/index-health.jpg" alt="Health" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-6xl font-light mb-6">Photobiomodulation</h1>
          <p className="text-2xl max-w-3xl mx-auto">Photobiomodulation is the term used for how red and near-infrared light helps the body heal and relieve pain.</p>
        </div>
      </section>

      {/* Don't Cover Pain Up */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex justify-end mb-8">
          <div className="max-w-xl text-right">
            <h2 className="text-5xl font-light mb-4 text-gray-900">Don't cover pain up</h2>
            <p className="text-xl text-gray-600">Drugs cover up pain by interfering with chemical signals, but doesn't heal. NovoTHOR® actually relieves pain at the source, instead of just hiding it.</p>
          </div>
        </div>
        <Image src="/images/health-novothor-white.jpg" alt="NovoTHOR Pod" width={1920} height={1080} className="w-full" />
        <div className="max-w-xl mt-12">
          <h2 className="text-5xl font-light mb-4 text-gray-900">Life changing</h2>
          <p className="text-xl text-gray-600">As we become more aware of the long term effects caused by the extensive use of pharmaceutical drugs and how it is a poor solution for chronic pain, people have been turning to NovoTHOR as a solution for managing their pain—with life changing results.</p>
        </div>
      </section>

      {/* Eryn Video */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative cursor-pointer group">
          <Image src="/images/health-eryn.jpg" alt="Eryn's Story" width={1920} height={1080} className="w-full rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
              <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-4">Eryn talks about her life changing experience with NovoTHOR and her chronic back pain.</p>
      </section>

      {/* Quote */}
      <section className="bg-gray-100 py-32">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-4xl font-light italic text-gray-900 mb-4">After three treatments I was pain free for the first time in 7 years.</blockquote>
          <cite className="text-xl text-gray-600">Eryn, New Zealand</cite>
        </div>
      </section>

      {/* Treat the System */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-5xl font-light mb-4 text-gray-900">Treat the system</h2>
          <p className="text-xl text-gray-600">The body is a system, not a set of individual parts. Injuring your leg puts additional strain on your back. NovoTHOR is a whole-body treatment, treating the entire system—in just 15 minutes.</p>
        </div>
        <div className="relative cursor-pointer group">
          <Image src="/images/health-victoria.jpg" alt="Victoria's Story" width={1920} height={1080} className="w-full rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
              <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-4">Victoria Robinson talks about the effects of NovoTHOR on her life</p>
      </section>

      {/* Victoria Quote */}
      <section className="bg-gray-100 py-32">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-4xl font-light italic text-gray-900 mb-4">It's been incredible. Life changing.</blockquote>
          <cite className="text-xl text-gray-600">Victoria Robinson</cite>
        </div>
      </section>

      <Footer />
    </main>
  )
}
