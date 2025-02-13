import TypingEffect from "../Effects/Typingeffect";
const Home = () => {
  return (
    <section
      className="w-full px-6 py-6 flex justify-center bg-[#fefaf5] rounded-xl"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-full pt-4 pb-5 space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-2/3">
          <h3 className="text-black mb-4 text-lg md:text-xl">
            I am Dilruba Guliyeva
          </h3>
          <h2 className="mb-4 text-2xl md:text-4xl font-extrabold uppercase bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text inline-block">
            <TypingEffect />
          </h2>
          <p className="text-black text-lg md:text-xl font-semibold mb-6">
            Passionate Frontend Developer, focused on creating seamless and
            visually engaging user interfaces. Skilled in HTML, CSS, JavaScript,
            and modern frameworks, with a keen eye for detail and user
            experience.
          </p>
          <button
            className="relative px-5 py-3 md:px-6 md:py-3 font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-pink-500 overflow-hidden group"
            onClick={() => {
              window.open("/CV/mycv.pdf", "_blank");
            }}
          >
            <span className="relative z-10">View & Download CV</span>
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </div>

        <div className="rounded-full h-48 md:h-64 w-48 md:w-64 border-solid p-2 md:p-3 border-amber-200 border bg-white">
          <img
            src="https://img.freepik.com/free-photo/cute-cartoon-girl-with-flower-illustration_1409-6088.jpg?t=st=1739114856~exp=1739118456~hmac=fa71f9795052b5df3a5da6750e2d9fbea1cdfc59a66dc38b6a4d9c6b3a32d9b8&w=1060"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
