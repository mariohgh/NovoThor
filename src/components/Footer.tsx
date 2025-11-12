import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://twitter.com/novothor" target="_blank" rel="noopener" className="hover:text-white">Twitter</a>
          <a href="https://facebook.com/NovoTHORpod/" target="_blank" rel="noopener" className="hover:text-white">Facebook</a>
          <a href="https://instagram.com/novothor" target="_blank" rel="noopener" className="hover:text-white">Instagram</a>
          <a href="https://youtube.com/channel/UCjVSl0Jf1Y0B7_D2Qe8qVEg" target="_blank" rel="noopener" className="hover:text-white">YouTube</a>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-center mb-8">
          <div>
            <h4 className="text-white mb-2">USA & Canada</h4>
            <a href="tel:+18773553151" className="hover:text-white">+1 877 355 3151</a>
          </div>
          <div>
            <h4 className="text-white mb-2">Rest of World</h4>
            <a href="tel:+4401494797100" className="hover:text-white">+44 01494 797 100</a>
          </div>
        </div>

        <div className="text-center text-sm max-w-4xl mx-auto mb-8">
          <p>Always read the label and follow the directions for use. NovoTHOR has the following contraindications. Pregnancy: Pregnant women are not to be given PBM treatment unless prescribed by a physician. Cancer: Cancer patients not to be given PBM treatment unless prescribed by a physician.</p>
        </div>

        <div className="text-center text-sm">
          <p>Copyright © 2019–{new Date().getFullYear()} THOR Photomedicine Ltd. All rights reserved. <Link href="/privacy" className="hover:text-white">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  )
}
