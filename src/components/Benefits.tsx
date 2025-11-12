import Image from 'next/image'

const benefits = [
  { icon: '/images/icons/sparkle.svg', title: 'Relieve Pain' },
  { icon: '/images/icons/muscle.svg', title: 'Recover' },
  { icon: '/images/icons/heartbeat.svg', title: 'Health Span' },
  { icon: '/images/icons/heart-regular.svg', title: 'Perform Better' },
  { icon: '/images/icons/lightning.svg', title: 'Recharge' },
  { icon: '/images/icons/refresh.svg', title: 'Increase Circulation' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-novothor-dark">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-wider mb-12 opacity-70">
          NovoTHOR Red Light Therapy (RLT) Health Benefits
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image src={benefit.icon} alt={benefit.title} width={48} height={48} />
              </div>
              <p className="text-sm uppercase">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
