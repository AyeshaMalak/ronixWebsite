import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 relative">
      
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-6 py-4 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <Link to="/home">
            <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-30 object-contain cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="h-20 sm:h-24"></div>

      
      <section className="bg-gray-100 flex flex-col justify-center items-center text-center py-16 px-6 md:px-12 mt-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Contact</h1>
        <p className="italic text-gray-500">
          Whether it's a project or just a cup of coffee!
        </p>
      </section>

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-16 pt-12">
        <div className="bg-gray-100 p-10 shadow-sm rounded-lg">
          <h2 className="text-3xl font-extrabold mb-6">Get a Quote</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=ronixsoftware@gmail.com&su=Work%20With%20Ronix&body=Hello%20Ronix,%0A%0AI’d%20like%20to%20discuss%20a%20new%20project.%0A%0AThanks!",
                "_blank"
              );
            }}
            className="space-y-5"
          >
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Good Name"
                className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
              />
              <input
                type="email"
                placeholder="Favorite Email"
                className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
              />
            </div>

            <div className="flex gap-4">
              <select className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent">
                <option>Interested In</option>
                <option>Web Design</option>
                <option>Branding</option>
                <option>UI/UX</option>
              </select>
              <select className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent">
                <option>Need Within</option>
                <option>1 Week</option>
                <option>1 Month</option>
                <option>3 Months</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                placeholder="Also please..."
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
              />
            </div>

            <button
              type="submit"
              className="text-sky-500 font-bold hover:text-black transition-colors"
            >
              Let’s Rock →
            </button>
          </form>
        </div>

        {/* Add Me Form */}
        <div className="bg-gray-100 p-10 shadow-sm rounded-lg">
          <h2 className="text-3xl font-extrabold mb-6">Befriend</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                "mailto:ronixsoftware@gmail.com?subject=Collaboration&body=Hi%20Ronix,%0A%0AI’d%20love%20to%20connect%20and%20collaborate!";
            }}
            className="space-y-5"
          >
            <input
              type="email"
              placeholder="Favorite Email"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
            />
            <button
              type="submit"
              className="text-sky-500 font-bold hover:text-black transition-colors"
            >
              Add Me! →
            </button>
          </form>

          <p className="mt-10 italic text-gray-500 text-sm">
            Willing to join us? Send your resume at{" "}
            <a
              href="mailto:ronixsoftware@gmail.com"
              className="underline text-sky-500 hover:text-black"
            >
              ronixsoftware@gmail.com
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;

