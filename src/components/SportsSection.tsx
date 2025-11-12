'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SportsSection() {
  return (
    <section className="bg-novothor-dark text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-8xl font-light uppercase mb-4">
            <span className="opacity-70">Less bench</span><br/>
            <span className="text-glow">More game</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="text-center">
            <Image 
              src="/images/2024-001/dunk/dunk_1086.jpg" 
              alt="Basketball player dunking"
              width={1086}
              height={1920}
              className="w-full h-auto"
            />
          </div>
          <div className="text-left pt-5">
            <p className="text-3xl font-light mb-6">Half of NBA 2024 playoff semi-finalists use NovoTHOR</p>
            <p className="text-xl mb-8 opacity-80">Train harder, stay in the game longer, and return to play sooner. Used by olympic athletes, players, and teams in MLB, NBA, NHL, NFL, MLS.</p>
            <a href="/#contact" className="cta-button">Talk sports</a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { logo: '/images/logos/buffalo-bills.svg', name: 'Buffalo Bills' },
            { logo: '/images/logos/arizona-cardinals.svg', name: 'Arizona Cardinals' },
            { logo: '/images/logos/caronlina-panthers.svg', name: 'Carolina Panthers' },
            { logo: '/images/logos/detroit-lions.svg', name: 'Detroit Lions' },
            { logo: '/images/logos/indiana-pacers.svg', name: 'Indiana Pacers' },
            { logo: '/images/logos/la-clippers.svg', name: 'LA Clippers' },
            { logo: '/images/logos/nd-hawks.svg', name: 'North Dakota Hawks' },
            { logo: '/images/logos/ohio-state.svg', name: 'The Ohio State' },
            { logo: '/images/logos/phoenix-suns.svg', name: 'Phoenix Suns' },
            { logo: '/images/logos/toronto-raptors.svg', name: 'Toronto Raptors' },
            { logo: '/images/logos/utah-jazz-white.svg', name: 'Utah Jazz' },
            { logo: '/images/logos/wa-commanders.svg', name: 'Washington Commanders' },
          ].map((team) => (
            <div key={team.name} className="text-center">
              <Image src={team.logo} alt={team.name} width={100} height={100} className="mx-auto mb-2" />
              <p className="text-xs uppercase opacity-70">{team.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
