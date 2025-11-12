import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Performance() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <Image src="/images/performance-dark.jpg" alt="Performance" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-6xl font-light mb-6">Train harder,<br />without the downsides.</h1>
          <p className="text-2xl max-w-3xl mx-auto">NovoTHOR® improves the healing and recovery process, reduces inflammation, and treats the joints. It allows coaches to increase training intensity and for athletes to push their limits.</p>
        </div>
      </section>

      {/* Treat the Machine */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-xl mb-8">
          <h2 className="text-5xl font-light mb-4">Treat the machine</h2>
          <p className="text-gray-400 text-xl">The body is a system, not a set of individual parts. Injuring your leg puts additional strain on your back. NovoTHOR treats the entire system in just 15 minutes, quickly and comfortably.</p>
        </div>
        <Image src="/images/performance-dark.jpg" alt="NovoTHOR Pod" width={1920} height={1080} className="w-full mb-8" />
        <div className="flex justify-end">
          <div className="max-w-xl text-right">
            <h2 className="text-5xl font-light mb-4">Stay on the field</h2>
            <p className="text-gray-400 text-xl">By treating the whole body, NovoTHOR helps keep athletes injury free — treating all the small problems that are easily ignored and shrugged off.</p>
          </div>
        </div>
      </section>

      {/* Olympic Athletes Video */}
      <section className="relative h-[60vh] flex items-center justify-center cursor-pointer group my-12">
        <Image src="/images/performance-tweets.jpg" alt="Olympic Athletes" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
            <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-1" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light mb-2">Olympic athletes</h3>
          </div>
          <div>
            <p className="text-gray-400">Olympic coach Dennis Mitchell and Olympians Justin Gatlin, Murielle Ahouré and Kaylin Witney talk about their experiences with NovoTHOR and how the it arrived at a key time for the Olympic Trials.</p>
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative cursor-pointer group mb-4">
              <Image src="/images/performance-rupp.jpg" alt="Galen Rupp" width={1125} height={750} className="w-full rounded" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-light mb-1">Galen Rupp</h3>
            <p className="text-gray-400 text-sm">Olympic Silver Medal<br />Rio Olympics</p>
          </div>
          <div className="text-center">
            <div className="relative cursor-pointer group mb-4">
              <Image src="/images/performance-hasay.jpg" alt="Jordan Hasay" width={1125} height={750} className="w-full rounded" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-light mb-1">Jordan Hasay</h3>
            <p className="text-gray-400 text-sm">Record Holder<br />Chicago Marathon</p>
          </div>
          <div className="text-center">
            <Image src="/images/performance-centrowitz.jpg" alt="Matt Centrowitz" width={1125} height={750} className="w-full rounded mb-4" />
            <h3 className="text-2xl font-light mb-1">Matt Centrowitz</h3>
            <p className="text-gray-400 text-sm">Olympic Gold Medal<br />Rio Olympics</p>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-5xl font-light mb-4">Integration</h2>
          <p className="text-gray-400 text-xl">Both US Special Forces and Professional athletes have been integrating the NovoTHOR into their day to day regimen for increasing their edge and keeping themselves in peak readiness</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/images/performance-ahoure.jpg" alt="Training" width={1125} height={750} className="w-full" />
          <Image src="/images/performance-medball.jpg" alt="Medicine Ball Training" width={1125} height={750} className="w-full" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
