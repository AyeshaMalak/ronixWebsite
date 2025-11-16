import React from "react";
import { Link } from "react-router-dom";

const Develop = () => {
  return (
    <div className="bg-white min-h-screen font-sans relative">
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-6 py-4 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <Link to="/home">
            <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-30 object-contain cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="h-32"></div>

      <div className="space-y-12 px-6 md:px-24 pb-20">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8 mt-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-[#00D4FF]">
              Design and Develop
            </h2>
            <p className="text-black leading-relaxed text-lg">
              RONIX web design and development team creates powerful net presence for small or medium companies. We concentrate on designing effective branding and developing W3C standards compliant websites that add more value to the brand.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image1.png"
              alt="Web Development Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        <Section
          title="Web Design and Development"
          text="Your website is an extension of your brand. In fact, it’s generally the manner people are added to your business. What does your website say about you? At RONIX, we help your brand come to existence at the web via customized websites developed along with your corporation and target audience in thoughts."
        />

        <Section
          title="Why Choose RONIX?"
          text={`RONIX digital agency offers high-quality and user-friendly web design and development services to clients all over the world. Benefits of using a custom-designed and responsive website for your enterprise include:
- Increase Brand Trust and Perception
- Increase Conversions and Sales
- Lower Bounce Rate
- Good for SEO
- Better User Experience
- Accessible for Mobile Users`}
        />

        <Section
          title="App Design and Development"
          text={`RONIX are expert iPhone/iPad apps designers and developers. We develop apps for iOS (iPad and iPhone). RONIX developers maintain high educational levels and design qualifications and take pride in providing top-class, affordable products and services.

We've got an experienced and committed iPhone and iPad software development team that is always keen to listen to your ideas and help bring them to life. We provide app design and development services for agencies globally using cutting-edge technologies to ensure your apps are tailor-made to satisfy your requirements. Whether it is hybrid or native apps, you can count on us for that!`}
        />
      </div>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#00D4FF]">{title}</h2>
    <p className="text-black leading-relaxed text-lg whitespace-pre-line">{text}</p>
  </div>
);

export default Develop;
