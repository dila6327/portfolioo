const Contact = () => {
  return (
    <section
      className="w-full pl-6 pr-6 pt-2 pb-2 flex justify-center bg-[#fefaf5] rounded-xl mt-10"
      id="contact"
    >
      <div className="w-full flex flex-col md:flex-row justify-between pt-4 pb-5">
        <div className="w-full md:w-1/2 flex justify-start flex-col">
          <h2 className="text-left text-orange-500 text-3xl mb-8 pl-8 font-bold">
            Contact Me
          </h2>
          <p className="text-black font-bold text-3xl text-left">
            Get in touch for collaboration or inquiries.
          </p>
          <div className="self-start mt-4 group mb-2">
            <span className="pl-1 pr-1 border-orange-500 border-solid rounded-full border-1 group-hover:bg-orange-500 transition-all duration-150 hidden md:inline-block">
              <i className="fa-regular fa-envelope text-orange-600 group-hover:text-white transition-all duration-150"></i>
            </span>{" "}
            <a
              href="mailto:dilrubaquliyeva774@gmail.com"
              className="text-black group-hover:text-orange-500 transition-all duration-150 text-sm md:text-base"
            >
              dilrubaquliyeva774@gmail.com
            </a>
          </div>

          <div className="self-start mt-4 group mb-2">
            <span className=" pl-1 pr-1 border-orange-500 border-solid rounded-full border-1 group-hover:bg-orange-500 transition-all duration-150 hidden md:inline-block">
              <i className="fa-brands fa-whatsapp text-orange-600 group-hover:text-white transition-all duration-150"></i>
            </span>{" "}
            <a
              href="#"
              className="text-black group-hover:text-orange-500 transition-all duration-150 text-sm md:text-base"
            >
              +994 50 731 42 49
            </a>
          </div>

          <div className="self-start mt-4 group mb-2">
            <span className="pl-1 pr-1 border-orange-500 border-solid rounded-full border-1 group-hover:bg-orange-500 transition-all duration-150 hidden md:inline-block">
              <i className="fa-solid fa-phone text-orange-600 group-hover:text-white transition-all duration-150"></i>
            </span>{" "}
            <a
              href="#"
              className="text-black group-hover:text-orange-500 transition-all duration-150 text-sm md:text-base"
            >
              +994 50 731 42 49
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-end">
          <div className="flex flex-col w-11/12">
            <h2 className="text-orange-500 text-3xl mb-8 pl-8 font-bold text-center">
              Follow me on social
            </h2>

            <div className="mb-3 flex justify-between items-center p-3 border border-gray-300 rounded-xl text-black text-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:animate-bounce">
              <a
                href="https://www.instagram.com/dilruba_rip.m/"
                className="flex items-center space-x-2 justify-between w-full"
                target="_blank"
              >
                <span className="flex items-center space-x-3">
                  <i className="fa-brands fa-instagram text-pink-600 text-2xl"></i>
                  <span>Instagram</span>
                </span>
                <span className="font-semibold hidden sm:inline">
                  personalaccount
                </span>
              </a>
            </div>

            <div className="mb-3 flex justify-between items-center p-3 border border-gray-300 rounded-xl text-black text-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:animate-bounce">
              <a
                href="https://www.linkedin.com/in/dilruba-quliyeva-aba2862a1/"
                className="flex items-center space-x-2 justify-between w-full"
                target="_blank"
              >
                <span className="flex items-center space-x-3">
                  <i className="fa-brands fa-linkedin text-blue-500 text-2xl"></i>
                  <span>LinkedIn</span>
                </span>
                <span className="font-semibold hidden sm:inline">
                  Dilruba Guliyeva
                </span>
              </a>
            </div>

            <div className="mb-3 flex justify-between items-center p-3 border border-gray-300 rounded-xl text-black text-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:animate-bounce">
              <a
                href="https://github.com/dila6327"
                className="flex items-center space-x-2 justify-between w-full"
                target="_blank"
              >
                <span className="flex items-center space-x-3">
                  <i className="fa-brands fa-github text-blue-500 text-2xl"></i>
                  <span>GitHub</span>
                </span>
                <span className="font-semibold hidden sm:inline">dila6327</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
