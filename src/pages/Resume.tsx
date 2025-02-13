import React from "react";
type ResumeProps = {
  activeIndex: number;
  handleButtonClick: (index: number) => void;
  activeSkill: string;
  setActiveSkill: (skill: string) => void;
  sections: string[];
};
const Resume: React.FC<ResumeProps> = ({
  activeIndex,
  handleButtonClick,
  activeSkill,
  setActiveSkill,
  sections,
}) => {
  return (
    <section
      className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-2 pb-2 flex justify-center bg-[#fefaf5] rounded-xl mt-10"
      id="resume"
    >
      <div className="flex justify-between w-full pt-4 pb-5 flex-col">
        <h2 className="text-orange-500 text-2xl sm:text-3xl mb-8 font-bold text-center">
          My Resume
        </h2>
        {sections[activeIndex] === "work" && (
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div>
              <h2 className="text-orange-400 text-xl sm:text-2xl mb-3">
                Work Experience
              </h2>
              <p className="text-black font-bold text-2xl sm:text-4xl text-start">
                Building Expertise as a{" "}
                <span className="text-orange-400">Frontend Developer</span>
              </p>
            </div>
            <div className="text-black text-start mt-4 md:mt-0">
              <i className="fa-solid fa-circle text-black"></i>
              <span className="text-xl sm:text-3xl"> Saiket Systems</span>
              <span className="block mt-3">
                Frontend developer (January 2024 -{" "}
                <span className="text-orange-400">present</span>)
              </span>
            </div>
          </div>
        )}
        {sections[activeIndex] === "education" && (
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-orange-400 text-xl sm:text-2xl mb-3">
                Education
              </h2>
              <p className="text-black font-bold text-lg sm:text-2xl text-start">
                Currently studying software development, building a strong
                foundation in programming, problem-solving, and{" "}
                <span className="text-orange-400">modern technologies</span>.
              </p>
            </div>
            <div className="text-black text-start w-full md:w-5/12 mt-4 md:mt-0">
              <div className="mt-2">
                <i className="fa-solid fa-circle text-black inline-block mr-3 sm:mr-5"></i>
                <span className="text-xl sm:text-3xl">ASOIU</span>
                <span className="block mt-1 ml-6 sm:ml-8">
                  Bachelor, Computer Engineering (2022 -{" "}
                  <span className="text-orange-400">In Progress</span>)
                </span>
              </div>
              <div>
                <i className="fa-solid fa-circle text-black inline-block mr-3 sm:mr-5"></i>
                <span className="text-xl sm:text-3xl">Turing Academy</span>
                <span className="block mt-1 ml-6 sm:ml-8">
                  Frontend development (2024 -{" "}
                  <span className="text-orange-400">In Progress</span>)
                </span>
              </div>
            </div>
          </div>
        )}
        {sections[activeIndex] === "skills" && (
          <div className="flex flex-col md:flex-row justify-between mb-8 w-full">
            <div>
              <h2 className="text-orange-400 text-xl sm:text-2xl mb-3 text-start">
                Skill
              </h2>
              <p className="text-black font-bold text-xl sm:text-4xl text-start">
                With a good <span className="text-orange-400">Personal</span>{" "}
                and Professional Skills
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setActiveSkill("personal")}
                  className={`p-2 rounded-lg font-semibold ${
                    activeSkill === "personal"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  Personal Skills
                </button>
                <button
                  onClick={() => setActiveSkill("professional")}
                  className={`p-2 rounded-lg font-semibold ${
                    activeSkill === "professional"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  Professional Skills
                </button>
              </div>
              {activeSkill === "personal" && (
                <div className="p-4 bg-white shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-1">
                    Personal Skills
                  </h3>
                  <ul className="text-black text-start text-sm sm:text-base">
                    <li>
                      <span className="block mb-1 text-xl">
                        Problem Solving
                      </span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[95%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[5%]"></div>
                      </div>
                    </li>
                    <li>
                      <span className="block mb-1 text-xl">
                        Critical Thinking
                      </span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[90%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[10%]"></div>
                      </div>
                    </li>
                    <li>
                      <span className="block mb-1 text-xl">
                        Time Management
                      </span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[85%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[15%]"></div>
                      </div>
                    </li>
                    <li>
                      <span className="block mb-1 text-xl">Collaboration</span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[88%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[12%]"></div>
                      </div>
                    </li>
                    <li>
                      <span className="block mb-1 text-xl">
                        Creativity & Innovation
                      </span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[90%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[10%]"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {activeSkill === "professional" && (
                <div className="p-4 bg-white shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-1">
                    Professional Skills
                  </h3>
                  <ul className="text-black text-start text-sm sm:text-base">
                    <li>
                      <span className="block mb-1 text-xl">React.js</span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[92%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[8%]"></div>
                      </div>
                    </li>
                    <li>
                      <span className="block mb-1 text-xl">Next.js</span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[86%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[14%]"></div>
                      </div>
                    </li>
                    <li>
                      <span className="block mb-1 text-xl">SCSS</span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[85%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[15%]"></div>
                      </div>
                    </li>
                    <li>
                      <span className="block mb-1 text-xl">TypeScript</span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[90%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[10%]"></div>
                      </div>
                    </li>
                    <li>
                      <span className="block mb-1 text-xl">JavaScript</span>
                      <div className="relative w-4/5 h-1 rounded-xl overflow-hidden animate-bounce">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-orange-500 w-[95%]"></div>
                        <div className="absolute inset-y-0 right-0 bg-gray-600 w-[5%]"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="flex justify-center space-x-2 sm:space-x-4">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`transition-all duration-300 p-2 rounded-full ${
                activeIndex === index
                  ? "bg-orange-500 w-5 sm:w-7 h-3 sm:h-4"
                  : "bg-black w-3 sm:w-4 h-3 sm:h-4"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Resume;
