import React from "react";
import portfol from "../arrays/Portfol";
const Portfolio = () => {
  const [activeButton, setActiveButton] = React.useState("see-all");

  const buttons = [
    { id: "see-all", label: "See all" },
    { id: "games", label: "Games" },
    { id: "apps", label: "Apps" },
  ];

  const filteredPortfolio = portfol.filter((elem) => {
    if (activeButton === "see-all") return true;
    return activeButton === "games"
      ? elem.category === "game"
      : elem.category === "app";
  });

  return (
    <section
      className="w-full pl-6 pr-6 pt-2 pb-2 flex justify-center bg-[#fefaf5] rounded-xl text-black mt-10"
      id="portfolio"
    >
      <div className="flex justify-between w-full pt-4 pb-5 flex-col">
        <h2 className="text-orange-500 text-3xl mb-8 pl-8 font-bold text-center">
          My Portfolio
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveButton(button.id)}
              className={`
                inline-block text-xl w-28 rounded-xl transition-colors hover:bg-[#FF6B2C] hover:text-white  
                ${
                  activeButton === button.id
                    ? "bg-[#FF6B2C] text-white"
                    : "bg-amber-200 text-black"
                }
              `}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-6">
          {filteredPortfolio.map((elem, index) => (
            <div key={index} className="h-60 mt-8 rounded-2xl">
              <a
                className="h-full w-full"
                href={elem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={elem.img}
                  className="h-full w-full rounded-2xl hover:scale-110 transition-all duration-150"
                  alt="portfolio item"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
