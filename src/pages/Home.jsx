import { useNavigate, Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

import Section from "../components/Section";
import SideScroller from "../components/SideScroller";
import SideTextSidebar from "../components/SideTextSidebar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">

     
      <SideScroller />

     
      <div className="fixed top-0 left-0 right-0 w-full bg-white px-4 py-1.5 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-24 object-contain" />
        </div>
      </div>

      <SideTextSidebar />

      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 pt-32 bg-gray-50"
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 mb-12 font-extrabold text-base sm:text-lg md:text-xl uppercase tracking-wider text-black">
          <Link to="/design" className="hover:text-[#0084FF] transition-colors">DESIGN</Link>
          <Link to="/develop" className="hover:text-[#0084FF] transition-colors">DEVELOP</Link>
          <Link to="/market" className="hover:text-[#0084FF] transition-colors">MARKET</Link>
        </div>

        <h1 className="font-black text-[20vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[200px] leading-none mb-8 text-center text-[#00D4FF] tracking-wide">
          RONIX
        </h1>

        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed px-4 text-gray-800">
          A <span className="font-medium">design obsessed</span> digital agency elevating brands to their maximum
          <br className="hidden sm:block" />
          with a firm belief that <span className="font-medium">limit is just an illusion.</span>
        </p>

        <div
          className="mt-16 flex flex-col items-center text-xs uppercase tracking-widest text-black cursor-pointer"
          onClick={() => navigate("/portfolio")}
        >
          <span className="font-bold">FEATURED WORK</span>
          <ArrowDown className="mt-3 h-5 w-5 animate-bounce text-[#00D4FF]" />
        </div>
      </section>

      {/* SECTION 1 */}
      <Section
        id="section1"
        title="Our Design Expertise"
        text="We create stunning visual designs that elevate your brand and leave a lasting impression. Our team focuses on unique concepts, color schemes, and layouts that make your brand stand out. Every design is tailored to reflect your brand’s personality and vision."
        img="/image1.png"
        moreLink={() => navigate("/design")}
        moreText="More >"
      />

      {/* SECTION 2 */}
      <Section
        id="section2"
        title="Development Solutions"
        text="We build robust, scalable applications with modern technology stacks. Our developers ensure clean code, responsive design, and seamless user experiences. From web apps to mobile platforms, we create solutions that meet your business needs and future growth."
        img="/image2.png"
        reverse
        moreLink={() => navigate("/develop")}
        moreText="More >"
      />

      {/* SECTION 3 */}
      <Section
        id="section3"
        title="Marketing Strategies"
        text="Our marketing solutions help your business reach the right audience effectively. We create data-driven campaigns, optimize social media, and analyze trends to boost engagement. With strategic planning, we aim to increase brand awareness and generate measurable results for your business."
        img="/image3.png"
      />

      {/* Mobile bottom menu */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white flex justify-around py-4 z-50 text-black">
        <Link to="/portfolio" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">PORTFOLIO</Link>
        <Link to="/contact" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">CONTACT</Link>
      </div>

    </div>
  );
};

export default Home;
