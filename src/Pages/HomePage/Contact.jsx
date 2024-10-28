import React, { useState } from "react";
import { GoUpload } from "react-icons/go";

const Contact = () => {
  // Form state and error handling
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectIdea: "",
    agreeMarketing: false,
    agreePrivacy: false,
  });
  const [errors, setErrors] = useState({});

  // InputType Email

  const handleEmail = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    let errorMsg = "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errorMsg = "Email is required.";
    } else if (!emailPattern.test(email)) {
      errorMsg = "Please enter a valid email address.";
    } else if (email.length > 50) {
      errorMsg = "Email must be 50 characters or less.";
    }

    if (errorMsg) {
      setErrors((prev) => ({ ...prev, email: errorMsg }));
    }
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Phone number must be to 10 digits only",
        }));
      }
    } else {
      // Handle other inputs if any
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // File input handler
  const [fileError, setFileError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Reset file error when user selects a new file
    setFileError("This File Size Not Vaild");

    if (file) {
      // Check file size (500 KB = 500 * 1024 bytes)
      if (file.size > 500 * 1024) {
        setFileError("File size must be 500KB or less.");
      } else {
        // Process the file (e.g., store it in state)
        console.log("File uploaded:", file);
        // Optionally store the file in state if needed:
        // setUploadedFile(file);
      }
    }
  };

  // Form validation
  const validate = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full name is required";
    if (!formData.projectIdea)
      formErrors.projectIdea = "Project idea is required";
    if (!formData.agreePrivacy)
      formErrors.agreePrivacy = "You must agree to the Privacy Policy";

    return formErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Save data to local storage
      localStorage.setItem("contactFormData", JSON.stringify(formData));

      // Show success message
      alert("Form submitted successfully!");

      // Clear form and errors
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectIdea: "",
        agreeMarketing: false,
        agreePrivacy: false,
      });
      setFile(null);
      setErrors({});
    }
  };

  return (
    <section className="bg-[rgba(236,236,236,0.5)]">
      <div className="py-12 mx-auto px-3 lg:container">
        <h1 className="text-large md:text-[40px] font-medium mb-4">Contact</h1>
        <p className="text-small md:text-md font-medium mb-8 max-w-2xl">
          Let our experience be your asset! We’re here to understand your
          challenge and prepare a strategic recommendation for you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Form */}
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Full Name Input */}
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold mb-2">
                  Full name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="border-1 border-black hover:shadow-sm hover:bg-gray-200/20 rounded-[5px] p-2.5 focus:outline-none focus:ring-1.5 focus:ring-[#235AB9] w-full"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleEmail}
                  placeholder="Your@email.com"
                  className="border-1 border-black hover:shadow-sm hover:bg-gray-200/20 rounded-[5px] p-2.5 focus:outline-none focus:ring-1.5 focus:ring-[#235AB9] w-full"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold mb-2">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChanges}
                  placeholder="Enter Your Number"
                  className="border-1 border-black hover:shadow-sm hover:bg-gray-200/20 rounded-[5px] p-2.5 focus:outline-none focus:ring-1.5 focus:ring-[#235AB9] w-full"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* File Upload */}
              <div className="lg:w-3/5">
                <label className="block border-dashed border-2 border-black p-4 rounded-[5px] cursor-pointer text-center my-4">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex justify-center items-center flex-col text-[12px]">
                    <GoUpload className="size-6" />
                    <h1 className="text-[14px] text-[#333]">
                      Choose a file
                      <br />
                      <span className="text-[16px] text-[#898989] font-normal">
                        Max file size: 500KB
                      </span>
                    </h1>
                  </div>
                </label>
                {fileError && (
                  <span className="text-red-500 text-sm mt-1">{fileError}</span>
                )}
              </div>
            </div>

            {/* Checkboxes */}
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="agreeMarketing"
                  checked={formData.agreeMarketing}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 outline-none accent-main-color"
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
                  name="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 outline-none accent-main-color"
                />

                <span className="ml-2">
                  I've read the&nbsp;
                  <span className="text-[#ff0000] font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff0000] after:transition-all after:duration-500 hover:after:w-full">
                    Privacy Policy
                  </span>
                  and agree to be contacted back *
                </span>
              </label>
            </div>

            <div className="mt-4">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline-hover">Google Privacy Policy</span>
              <br />
              and the <span className="underline-hover">
                Cookie Policy
              </span>{" "}
              apply.
            </div>
          </form>

          {/* Right Form */}
          <form className="flex flex-col w-full">
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold mb-2">
                Tell us about your project *
              </label>
              <textarea
                name="projectIdea"
                value={formData.projectIdea}
                onChange={handleChange}
                rows="14"
                placeholder="Your Project Idea"
                className="border-1 hover:shadow-sm hover:bg-gray-200/20 border-black rounded-[5px] p-2.5 focus:outline-none focus:ring-1.5 focus:ring-[#235AB9] w-full"
              ></textarea>
              {errors.projectIdea && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.projectIdea}
                </span>
              )}
              <span className="text-right text-gray-400 text-sm mt-1">
                0/5000
              </span>
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex lg:justify-end xs:justify-center items-center">
              <button
                type="submit"
                className="button transition-all duration-200 ease-linear w-[50%] h-12"
                onClick={handleSubmit}
              >
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
