export default function SignUp() {
  return (
    <section
      className="ezy__signup14 light flex items-center justify-center py-14 md:py-24 text-black bg-cover bg-right bg-no-repeat relative"
    >
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <div className="bg-white shadow-xl p-4">
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center justify-center h-full">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/background/abstract-background3.jpg"
                      alt=""
                      className="max-h-[300px] w-full lg:max-h-full lg:h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-6">
                  <div className="flex flex-col justify-center items-center text-center h-full p-2">
                    <h2 className="text-[26px] leading-none font-bold mb-2">
                      REGISTRATION FORM
                    </h2>
                    <form className="w-full mt-6">
                      <div className="flex justify-center mb-4">
                        <input
                          type="text"
                          className="border-b border-black focus:outline-none focus:border-blue-600 py-2 text-sm w-1/2 mr-2"
                          id="fname"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          className="border-b border-black focus:outline-none focus:border-blue-600 py-2 text-sm w-1/2 ml-2"
                          id="lname"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="w-full relative mb-4">
                        <input
                          type="text"
                          className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
                          id="uname"
                          placeholder="Username"
                        />
                        <i className="fas fa-user absolute top-1/2 -translate-y-1/2 right-2 opacity-80"></i>
                      </div>
                      <div className="w-full relative mb-4">
                        <input
                          type="email"
                          className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
                          id="email"
                          placeholder="Email Address"
                        />
                        <i className="fas fa-envelope absolute top-1/2 -translate-y-1/2 right-2 opacity-80"></i>
                      </div>
                      <div className="w-full relative mb-4">
                        <input
                        type="password"
                          className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
                          id="pass"
                          placeholder="Password"
                        />
                        <i className="fas fa-lock absolute top-1/2 -translate-y-1/2 right-2 opacity-80"></i>
                      </div>
                      <div className="w-full relative mb-4">
                        <input
                          type="pass"
                          className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
                          id="con-pass"
                          placeholder="Confirm Password"
                        />
                        <i className="fas fa-lock absolute top-1/2 -translate-y-1/2 right-2 opacity-80"></i>
                      </div>

                      <button
                        type="submit"
                        className="bg-gray-700 py-4 px-10 text-white hover:bg-opacity-95 mt-4"
                      >
                        Register <i className="fas fa-arrow-right"></i>
                      </button>

                      <div className="text-center mt-4">
                        <p className="mb-0 text-sm">
                          Already have an account?
                          <a href="#!" className="hover:text-blue-600">
                            Log In
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
