import { useState, useEffect } from "react";

const SideScroller = () => {
  const sections = ["home", "design", "develop", "market"]; 
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full border-2 border-cyan-500 transition-all duration-300 ${
            active === id ? "bg-cyan-500 scale-125" : "bg-white hover:bg-cyan-400"
          }`}
        />
      ))}
    </div>
  );
};

export default SideScroller;
