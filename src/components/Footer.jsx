import { Link } from 'react-router-dom'
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white p-5">
      <div className="container-custom flex flex-wrap justify-between gap-6">

        <div className="flex-1 min-w-[150px]">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text mb-1">
            RONIX
          </h3>
          <p className="text-gray-400 text-[10px] md:text-sm">
            Creating exceptional digital experiences for forward-thinking brands.
          </p>
        </div>

        <div className="flex-1 min-w-[150px]">
          <h4 className="font-bold text-white mb-1">Services</h4>
          <ul className="space-y-1 text-gray-400 text-[10px] md:text-sm">
            <li><Link to="/design" className="hover:text-cyan-400 transition">Design</Link></li>
            <li><Link to="/develop" className="hover:text-cyan-400 transition">Develop</Link></li>
            <li><Link to="/market" className="hover:text-cyan-400 transition">Market</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[150px]">
          <h4 className="font-bold text-white mb-1">Connect</h4>
          <div className="flex gap-2 mb-2">
            <a href="https://www.linkedin.com/in/ronix-software" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/ronixsoftware/" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="flex-1 min-w-[150px]">
          <h4 className="font-bold text-white mb-1">Contact</h4>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 text-gray-900 rounded text-sm md:text-base border border-white bg-gray-900 placeholder-gray-400"
            />
            <textarea 
              placeholder="Message" 
              className="p-2 text-gray-900 rounded text-sm md:text-base resize-none h-16 border border-white bg-gray-900 placeholder-gray-400"
            ></textarea>
            <button 
              type="submit" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded text-sm md:text-base transition"
            >
              Send
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-4 pt-3 text-gray-500 text-[10px] md:text-xs text-center md:text-left">
        &copy; {currentYear} Ronix. All rights reserved.
      </div>
    </footer>
  )
}
