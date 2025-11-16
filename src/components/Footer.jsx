import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-24 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent">
            RONIX
          </h2>
          <p className="text-gray-700">
            We create powerful digital experiences to boost your brand globally.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/home"
                className="hover:text-[#00D4FF] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/design"
                className="hover:text-[#00D4FF] transition-colors"
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                to="/develop"
                className="hover:text-[#00D4FF] transition-colors"
              >
                Develop
              </Link>
            </li>
            <li>
              <Link
                to="/market"
                className="hover:text-[#00D4FF] transition-colors"
              >
                Market
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#00D4FF] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-700">ronixsoftware@gmail.com</p>
          <p className="text-gray-700">+92 300 0000000</p>
          <p className="text-gray-700">Karachi, Pakistan</p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} RONIX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
