import Image from 'next/image'

export default function MilitarySection() {
  return (
    <section className="bg-novothor-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-light uppercase">
            Elite<br/>
            <span className="text-novothor-red">Military</span><br/>
            Forces
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-3xl font-light mb-6">Perform better with the press of a button</p>
            <p className="text-xl mb-8 opacity-80">NovoTHOR is widely used by the US Military forces to "increase operational readiness" through performance enhancement, injury prevention, and improved recovery in the military training setting</p>
            <a href="/#contact" className="inline-block bg-novothor-red px-8 py-4 rounded hover:bg-red-700 transition">Improve performance</a>
          </div>
          <div className="relative h-[500px]">
            <Image 
              src="/images/2024-001/military/novothor-military-us_800.jpg" 
              alt="US Military using NovoTHOR"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { logo: '/images/logos/us-special-forces.png', name: 'US Army Special Forces' },
            { logo: '/images/logos/us-navy-special-warfare.png', name: 'US Navy SEALs' },
            { logo: '/images/logos/us-navy-reserve.svg', name: 'US Navy' },
            { logo: '/images/logos/us-af.svg', name: 'US Airforce' },
          ].map((branch) => (
            <div key={branch.name} className="text-center">
              <Image src={branch.logo} alt={branch.name} width={80} height={80} className="mx-auto mb-2" />
              <p className="text-xs uppercase opacity-70">{branch.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
