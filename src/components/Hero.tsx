'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <>
      {/* Red Splash Hero */}
      <section className="index-on relative flex items-center justify-center">
        <div className="scrolldown">
          <a href="#intro">
            <span></span>
            <span></span>
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Image 
              src="/images/logos/novothor_white_r.svg" 
              alt="NovoTHOR Logo" 
              width={500} 
              height={120} 
              className="mx-auto mb-12 md:mb-16" 
              style={{ maxWidth: '100%' }}
            />
            <h1 className="sub-head mb-6">
              NovoTHOR® full body red light therapy bed
            </h1>
            <h2 className="sub-head mb-0">
              Reduce your pain, improve your health, and increase your performance
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}
