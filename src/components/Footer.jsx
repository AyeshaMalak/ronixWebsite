import { Link } from 'react-router-dom'
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white p-5">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-3 gap-6">

        {/* Column 1 */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text mb-1">
            RONIX
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Creating exceptional digital experiences for forward-thinking brands.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
          <div>
            <h4 className="font-bold text-white mb-1">Services</h4>
            <ul className="space-y-1 text-gray-400">
              <li><Link to="/design" className="hover:text-cyan-400 transition">Design</Link></li>
              <li><Link to="/develop" className="hover:text-cyan-400 transition">Develop</Link></li>
              <li><Link to="/market" className="hover:text-cyan-400 transition">Market</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1">Company</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-white mb-1">Connect</h4>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/ronix-software" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/ronixsoftware/" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition">
              <Instagram size={16} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-4 pt-3 text-gray-500 text-xs text-center md:text-left">
        &copy; {currentYear} Ronix. All rights reserved.
      </div>
    </footer>
  )
}
