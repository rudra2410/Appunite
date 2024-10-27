import React from "react";
import { GoUpload } from "react-icons/go";

const Contact = () => {
  return (
    <section className="bg-[rgba(236,236,236,0.5)]">
      <div className="py-12  container">
        <h1 className="text-[32px] md:text-[40px] font-medium mb-4">Contact</h1>
        <p className="text-[16px] md:text-[20px] font-medium mb-8 max-w-2xl">
          Let our experience be your asset! We’re here to understand your
          challenge and prepare a strategic recommendation for you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Form */}
          <form className="flex flex-col w-full">
            <div className="space-y-8">
              {/* Full Name Input */}
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold mb-2">
                  Full name *
                </label>
                <input
                  type="text"
                  placeholder="  Your full name"
                  className="border-1 border-black hover:shadow-sm hover:bg-gray-200/20 rounded-[5px] p-2.5 focus:outline-none focus:ring-1.5 focus:ring-[#235AB9] w-full"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="  Your@email.com"
                  className="border-1 border-black hover:shadow-sm hover:bg-gray-200/20 rounded-[5px] p-2.5 focus:outline-none focus:ring-1.5 focus:ring-[#235AB9] w-full"
                />
              </div>

              {/* Phone Number Input */}
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold mb-2">
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="  Your phone number"
                  className="border-1 border-black hover:shadow-sm hover:bg-gray-200/20 rounded-[5px] p-2.5 focus:outline-none focus:ring-1.5 focus:ring-[#235AB9] w-full"
                />
              </div>
              <div className="lg:w-3/5">
                <label className="block border-dashed border-2 border-black p-4 rounded-[5px] cursor-pointer text-center my-4">
                  <input type="file" className="hidden" />
                  <div className="flex justify-center items-center flex-col text-[12px]">
                    <GoUpload className="size-6" />
                    <h1 className="text-[14px] text-[#333]">
                      Choose a file
                      <br />
                      <span className="text-[16px] text-[#898989] font-normal">
                        Max file size: 10MB
                      </span>
                    </h1>
                  </div>
                </label>
              </div>
            </div>

            {/* File Upload */}

            {/* Checkboxes */}
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green-500 focus:outline-none"
                />
                <span className="ml-2">
                  I agree to receive marketing communication
                </span>
              </label>
            </div>

            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green-500 focus:outline-none"
                />
                <span className="ml-2">
                  I've read the&nbsp;
                  <span className="text-[#ff0000] font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff0000] after:transition-all after:duration-500 hover:after:w-full">
                    Privacy Policy&nbsp;
                  </span>
                  and agree to be contacted back *
                </span>
              </label>
            </div>

            <div className="text-sm text-gray-500 py-4">
              <h1 className="text-[14px] text-black">
                This site is protected by reCAPTCHA and&nbsp;
                <span className="text-[#ff0000] font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff0000] after:transition-all after:duration-500 hover:after:w-full">
                  Google Privacy Policy
                </span>
                <br />
                and the&nbsp;
                <span className="text-[#ff0000] font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff0000] after:transition-all after:duration-500 hover:after:w-full">
                  Cookie Policy
                </span>
                apply.
              </h1>
            </div>
            <h1 className="text-[16px]">* required</h1>
          </form>

          {/* Right Form */}
          <form className="flex flex-col w-full">
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold mb-2">
                Tell us about your project *
              </label>

              <textarea
                rows="14"
                placeholder="Your Project Idea"
                className="border-1 hover:shadow-sm hover:bg-gray-200/20 border-black rounded-[5px] p-2.5 focus:outline-none focus:ring-1.5 focus:ring-[#235AB9] w-full"
              ></textarea>
              <span className="text-right text-gray-400 text-sm mt-1">
                0/5000
              </span>
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex lg:justify-end xs:justify-center items-center">
              <button className="button transition-all duration-200 ease-linear w-[50%] h-12">
                <span className="capitalize">Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
