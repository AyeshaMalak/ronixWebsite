import React from "react";
import { Link } from "react-router-dom";

const Section = ({ title, text }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-black bg-clip-text text-transparent">
      {title}
    </h2>
    <p className="text-gray-800 leading-relaxed text-lg">{text}</p>
  </div>
);

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

      <div className="space-y-12 px-6 md:px-24 pb-20 ">

        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8 mt-15 ">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug bg-gradient-to-b from-[#A4E6F8] to-[#5AB5F3] bg-clip-text text-transparent ">
              Digital Media Marketing
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
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

        <Section
          title="Search Engine Optimization"
          text="SEO plays a key role in Google ranking. RONIX helps bring your website to the top rank and drives relevant traffic that converts to clients. We focus not only on visibility but also on attracting potential customers who are actively searching for your products or services. Our expert team ensures that your website is optimized with best practices for maximum search engine performance."
        />

        <Section
          title="Our Strategy"
          text="We develop strategies to maximize your website’s potential, ensuring maximum online exposure globally. Our approach includes analyzing your target audience, competitor research, and tailoring campaigns that drive measurable results. With a focus on ROI, we continuously refine our tactics to deliver sustainable growth for your business online."
        />

        <Section
          title="Mobile Search Optimization"
          text="With the growing use of smartphones, optimizing your website for mobile users is crucial. RONIX ensures your site performs perfectly on all devices, providing fast load times, responsive design, and an engaging user experience. Mobile optimization increases your reach, improves engagement, and enhances conversion rates across your target audience."
        />

        <Section
          title="Genuine SEO Methods"
          text="We implement ethical SEO practices that help search engines understand your brand, products, and services. RONIX focuses on building high-quality content, optimizing site structure, and ensuring technical SEO compliance. These genuine methods lead to improved rankings, better visibility, and consistent traffic growth over time."
        />

        <Section
          title="Pay-Per-Click Management"
          text="PPC provides instant traffic and targeted audience reach. RONIX manages your campaigns strategically to maximize traffic while minimizing cost. From keyword research to ad copy creation and bid management, we ensure your paid advertising delivers measurable ROI, driving both leads and conversions effectively."
        />

        <Section
          title="Marketing Campaigns"
          text="We help target your campaigns based on user interests, search behavior, and demographics. RONIX creates data-driven campaigns across search engines and social media platforms, optimizing for engagement, conversions, and overall brand growth. Our approach ensures that your advertising spend is utilized efficiently to reach the right audience at the right time."
        />

      </div>
    </div>
  );
};

export default Market;
