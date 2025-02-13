import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#fefaf5] flex justify-between items-center px-6 py-2 w-[90%] md:w-4/6 rounded-full fixed z-10 top-4 shadow-md">
      <a
        className="text-4xl font-bold uppercase bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text"
        href="#"
      >
        DG
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-orange-500 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#fefaf5] md:bg-transparent p-5 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-black font-semibold">
          {["Home", "About", "Resume", "Portfolio", "Contact"].map((item) => (
            <li key={item} className="text-center md:text-left">
              <a
                className="relative group hover:text-orange-300 block p-2"
                href={`#${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-300 transition-all duration-300 group-hover:w-full group-hover:opacity-100 opacity-0"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Language Button */}
      <button className="hidden md:block">
        <img
          className="w-10 h-10 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"
          alt="Azerbaijan Flag"
        />
      </button>
    </header>
  );
};

export default Header;
