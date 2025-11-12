'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="hidden md:block">
            <Image src="/images/novothor_white_nor.svg" alt="NovoTHOR" width={200} height={43} />
          </Link>
          
          <Link href="/" className="md:hidden">
            <Image src="/images/thor_o_white.svg" alt="NovoTHOR" width={43} height={43} />
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8`}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/health" className="nav-link">Health</Link>
            <Link href="/performance" className="nav-link">Performance</Link>
            <Link href="/technology" className="nav-link">Technology</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/locations" className="nav-link">Locations</Link>
            <Link href="/#contact" className="nav-link text-novothor-red">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
