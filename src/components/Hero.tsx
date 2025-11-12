'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center red-glow">
      <div className="absolute inset-0 bg-gradient-radial from-novothor-red/20 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 text-glow">
            NovoTHOR® full body red light therapy bed
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-12">
            Reduce your pain, improve your health, and increase your performance
          </h2>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#benefits" className="animate-bounce block">
          <svg className="w-6 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
