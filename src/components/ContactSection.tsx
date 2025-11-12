'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', type: 'inquiry' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (res.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '', message: '', type: 'inquiry' })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-5xl font-light text-center mb-12">Want to learn more?</h2>
        
        {success ? (
          <div className="text-center text-green-400 text-xl">Thank you! We'll be in touch soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-novothor-red"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-novothor-red"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-novothor-red"
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-novothor-red"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-novothor-red px-8 py-4 rounded hover:bg-red-700 transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Enquire Now'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
