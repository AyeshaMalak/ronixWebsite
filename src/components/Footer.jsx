import { Link } from 'react-router-dom'
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-4 overflow-x-auto">
      <div className="container-custom flex items-center gap-8 whitespace-nowrap">

        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text">
          RONIX
        </h3>

        <div className="flex gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-1">Services</h4>
            <ul className="flex gap-3 text-gray-400">
              <li><Link to="/design" className="hover:text-cyan-400 transition">Design</Link></li>
              <li><Link to="/develop" className="hover:text-cyan-400 transition">Develop</Link></li>
              <li><Link to="/market" className="hover:text-cyan-400 transition">Market</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-1">Company</h4>
            <ul className="flex gap-3 text-gray-400">
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-1">Connect</h4>
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

        <span className="text-gray-500 text-xs">&copy; {currentYear} Ronix. All rights reserved.</span>
      </div>
    </footer>
  )
}
