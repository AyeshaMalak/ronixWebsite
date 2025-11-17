import { Link } from "react-router-dom";

const SideTextSidebar = () => {
  return (
    <div
      className="fixed left-2 md:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50"
      style={{ maxHeight: "calc(100vh - 100px)" }} 
    >
      <h5 className="text-lg font-bold flex flex-col md:flex-col">
        <Link
          to="/portfolio"
          className="text-black hover:text-cyan-500 transition-colors uppercase tracking-widest"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className="text-black hover:text-cyan-500 transition-colors uppercase tracking-widest mt-4"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          CONTACT
        </Link>
      </h5>
    </div>
  );
};

export default SideTextSidebar;
