import React from "react";
import { Link } from "react-router-dom";

const Market = () => {
  return (
    <div className="relative bg-white min-h-screen font-sans">

      <div className="fixed top-0 left-0 right-0 w-full bg-white px-6 py-4 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <Link to="/home">
            <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-30 object-contain cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="h-28"></div>

      <div className="space-y-12 px-6 md:px-24 pb-20">

        {/* First Section with Cyan Heading */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8 mt-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-[#00D4FF]">
              Digital Media Marketing
            </h2>
            <p className="text-black leading-relaxed text-lg">
              RONIX offers complete Digital Media Marketing services to help your business reach potential clients effectively.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image3.png"
              alt="Digital Marketing Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Other Sections with Black Headings */}
        <Section
          title="Search Engine Optimization"
          text="SEO plays a key role in Google ranking. RONIX helps bring your website to the top rank and drives relevant traffic..."
        />
        <Section
          title="Our Strategy"
          text="We develop strategies to maximize your website’s potential, ensuring maximum online exposure globally..."
        />
        <Section
          title="Mobile Search Optimization"
          text="With the growing use of smartphones, optimizing your website for mobile users is crucial..."
        />
        <Section
          title="Genuine SEO Methods"
          text="We implement ethical SEO practices that help search engines understand your brand..."
        />
        <Section
          title="Pay-Per-Click Management"
          text="PPC provides instant traffic and targeted audience reach. RONIX manages your campaigns strategically..."
        />
        <Section
          title="Marketing Campaigns"
          text="We help target your campaigns based on user interests, search behavior, and demographics..."
        />
      </div>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">{title}</h2>
    <p className="text-gray-800 leading-relaxed text-lg">{text}</p>
  </div>
);

export default Market;
