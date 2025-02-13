const About = () => {
  return (
    <section
      className="w-full flex justify-center mt-10 bg-[#fefaf5] rounded-xl px-6 py-10"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-8 md:space-y-0">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-orange-500 text-xl md:text-2xl font-semibold mb-6 md:pl-8">
            About me
          </h2>
          <h3 className="font-bold text-black text-2xl md:text-4xl mb-6 md:pl-8">
            Turning ideas into interactive experiences
          </h3>
          <p className="text-black text-lg md:text-xl md:pl-8 md:pr-4 pb-4 leading-relaxed">
            A passionate Front-End Developer dedicated to building seamless,
            user-friendly, and visually stunning digital experiences. For me,
            development is more than just writing code—it's about crafting
            intuitive and engaging interfaces that connect technology with
            people. Every line of code serves a purpose, ensuring performance,
            accessibility, and responsiveness. My goal is to transform designs
            into interactive, dynamic experiences that not only look great but
            feel great to use.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjMzOXlndjhmZ3o1MnltOWpjaHk0NDUzbWo1ZXhmMnp4aThqcGQyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOZhmE42D1WrCWATLK/giphy.gif"
            className="w-full md:w-[90%] h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
