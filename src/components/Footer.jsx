import { Link } from 'react-router-dom'
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white p-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text mb-3">
              RONIX
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating exceptional digital experiences for forward-thinking brands.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Services</h4>
            <ul className="space-y-1 text-gray-400">
              <li><Link to="/design" className="hover:text-cyan-400 transition">Design</Link></li>
              <li><Link to="/develop" className="hover:text-cyan-400 transition">Develop</Link></li>
              <li><Link to="/market" className="hover:text-cyan-400 transition">Market</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Company</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ronix-software?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/ronixsoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Ronix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
