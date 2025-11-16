import React from "react";
import { Link } from "react-router-dom";

const Design = () => {
  return (
    <div className="bg-white min-h-screen font-sans relative">
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-6 py-4 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <Link to="/home">
            <img
              src="/logo.jpeg"
              alt="RONIX Logo"
              className="h-16 sm:h-30 object-contain cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="h-24"></div>

      <div className="space-y-12 px-6 md:px-24 pb-20">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8 mt-18">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-[#00D4FF]">
              Brand Identity
            </h2>

            <p className="text-gray-800 leading-relaxed text-lg">
              We create strong brand identities that elevate your business globally.
              Clear and memorable designs for maximum impact.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image3.png"
              alt="Brand Identity Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        <Section
          title="Brand Guidelines"
          text="Every brand is unique. We carefully choose colors and fonts for consistency."
        />
        <Section
          title="Brand Reputation"
          text="We maintain your brand reputation professionally and effectively."
        />
        <Section
          title="Logo Design"
          text="Our designers craft logos that perfectly reflect your brand."
        />
        <Section
          title="Business Cards"
          text="Professional cards that leave a lasting impression on clients."
        />
        <Section
          title="Brochures and Flyers Design"
          text="We create engaging brochures and flyers to attract customers."
        />
        <Section
          title="Stationery Design"
          text="Custom stationery that strengthens your brand identity."
        />
        <Section
          title="Social Media Branding"
          text="Enhancing your social media presence with creative branding."
        />
        <Section
          title="Infographics"
          text="Eye-catching infographics to simplify and promote your data."
        />
      </div>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#00D4FF]">{title}</h2>
    <p className="text-gray-800 leading-relaxed text-lg">{text}</p>
  </div>
);

export default Design;
