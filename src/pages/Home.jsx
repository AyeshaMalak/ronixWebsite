import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const Section = ({ id, title, text, img, reverse }) => (
  <section
    id={id}
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-between max-w-7xl mx-auto my-20 px-6 py-12 bg-gray-100 rounded-xl gap-8`}
  >
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-b from-[#19D3FF] to-[#0084FF] bg-clip-text text-transparent tracking-wide">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-gray-700">{text}</p>
    </div>

    <div className="md:w-1/2 flex justify-center">
      <img
        src={img}
        alt={title}
        className="rounded-lg max-h-80 w-full object-cover"
      />
    </div>
  </section>
);

const SideScroller = () => {
  const sections = ["home", "section1", "section2", "section3"];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-50 hidden md:flex">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full border-2 border-[#0084FF] transition-all duration-300 ${
            active === id ? "bg-[#0084FF] scale-125" : "bg-white hover:bg-[#19D3FF]"
          }`}
          aria-label={`Navigate to ${id}`}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <SideScroller />

      <div className="fixed top-0 left-0 right-0 w-full bg-white px-6 py-4 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <img src="/logo.jpeg" alt="RONIX Logo" className="h-16 sm:h-30 object-contain" />
        </div>
      </div>

      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 pt-32 bg-gray-50"
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 mb-12 font-extrabold text-base sm:text-lg md:text-xl uppercase tracking-wider text-black">
          <Link to="/design" className="hover:text-[#0084FF] transition-colors">DESIGN</Link>
          <Link to="/develop" className="hover:text-[#0084FF] transition-colors">DEVELOP</Link>
          <Link to="/market" className="hover:text-[#0084FF] transition-colors">MARKET</Link>
        </div>

        <h1 className="font-black text-[20vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[200px] leading-none mb-8 text-center bg-gradient-to-b from-[#19D3FF] to-[#0084FF] bg-clip-text text-transparent tracking-wide">
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
          <ArrowDown className="mt-3 h-5 w-5 animate-bounce text-[#0084FF]" />
        </div>

        <div className="fixed left-2 md:left-10 top-1/2 -translate-y-1/2 flex-col gap-12 md:gap-10 px-2 py-4 rounded-md z-50 hidden sm:flex text-black">
          <Link
            to="/portfolio"
            className="font-extrabold text-xs md:text-xl uppercase [writing-mode:vertical-lr] rotate-180 hover:text-[#0084FF] transition-colors"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/contact"
            className="font-extrabold text-xs md:text-xl uppercase [writing-mode:vertical-lr] rotate-180 hover:text-[#0084FF] transition-colors"
          >
            CONTACT
          </Link>
        </div>
      </section>

      <Section
        id="section1"
        title="Our Design Expertise"
        text="We create stunning visual designs that elevate your brand and leave a lasting impression. Our team focuses on unique concepts, color schemes, and layouts that make your brand stand out. Every design is tailored to reflect your brand’s personality and vision."
        img="/image1.png"
      />

      <Section
        id="section2"
        title="Development Solutions"
        text="We build robust, scalable applications with modern technology stacks. Our developers ensure clean code, responsive design, and seamless user experiences. From web apps to mobile platforms, we create solutions that meet your business needs and future growth."
        img="/image2.png"
        reverse
      />

      <Section
        id="section3"
        title="Marketing Strategies"
        text="Our marketing solutions help your business reach the right audience effectively. We create data-driven campaigns, optimize social media, and analyze trends to boost engagement. With strategic planning, we aim to increase brand awareness and generate measurable results for your business."
        img="/image3.png"
      />

      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white flex justify-around py-4 z-50 text-black">
        <Link to="/portfolio" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">PORTFOLIO</Link>
        <Link to="/contact" className="font-extrabold text-sm uppercase hover:text-[#0084FF] transition-colors">CONTACT</Link>
      </div>
    </div>
  );
};

export default Home;
      
