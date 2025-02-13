import { useState, useEffect } from "react";

import "./App.css";

import Header from "./pages/header";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  const sections = ["work", "education", "skills"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSkill, setActiveSkill] = useState("personal");

  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();
      setActiveIndex((prev) => {
        if (event.deltaY > 0 || event.deltaX > 0) {
          return (prev + 1) % sections.length;
        } else if (event.deltaY < 0 || event.deltaX < 0) {
          return (prev - 1 + sections.length) % sections.length;
        }
        return prev;
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [sections.length]);

  return (
    <div>
      <div className="h-full w-full flex flex-col items-center">
        <Header />
        <main className="mt-14 flex justify-between flex-col w-5/6 items-center">
          <Home />
          <About />
          <Resume
            activeIndex={activeIndex}
            handleButtonClick={setActiveIndex}
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
            sections={sections}
          />
          <Portfolio />
          <Contact />
          <section className="w-full  pl-6 pr-6 pt-2 pb-2  flex justify-center bg-[#fefaf5]  rounded-xl mt-5">
            <div className="flex justify-between w-full pt-4 pb-5">
              <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                Dilruba Guliyeva
              </span>
              <span className="text-gray-700 text-sm">
                Designed by{" "}
                <a
                  href="https://www.linkedin.com/in/fidanshikhaliyeva/"
                  target="_blank"
                >
                  Fidan Shikhaliyeva
                </a>
              </span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
