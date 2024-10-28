import React, { useState } from "react";
import { TiArrowRight } from "react-icons/ti";

const Business_Section = () => {
  const [selectedOption, setSelectedOption] = useState("Product Idea");

  // Content for the right side based on selection
  const renderContent = () => {
    switch (selectedOption) {
      case "Product Idea":
        return (
          <div>
            <p className="text-p-color font-normal lg:text-small mb-8">
              We understand that execution is the key to getting your business
              to the next level (financing round, BEP or scale).
            </p>
            <svg
              viewBox="0 0 469 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:size-[100%]"
            >
              <path
                d="M43.6797 191.68V211.01L78.4097 190.95V171.62L43.6797 191.67V191.68Z"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M43.6792 151.58L78.4092 171.64L43.6792 191.69L8.94922 171.64L43.6792 151.58ZM43.6792 151.58L78.4092 171.64L43.6792 191.69L8.94922 171.64"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M43.6792 211.01L8.94922 191.68V171.63L43.6792 191.68V211.01Z"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M170.91 146.68V211.89L205.64 191.84V126.62L170.91 146.67V146.68Z"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M170.91 211.89L136.18 191.84V126.62L170.91 146.67V211.88V211.89Z"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M170.91 106.58L205.64 126.63L170.91 146.68L136.18 126.63L170.91 106.58ZM170.91 106.58L205.64 126.63L170.91 146.68L136.18 126.63"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M299.121 99.68V212.07L333.851 192.02V79.64L299.121 99.69V99.68Z"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M299.121 212.07L264.391 192.02V79.64L299.121 99.69V212.08V212.07Z"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M299.121 59.58L333.851 79.63L299.121 99.68L264.391 79.63L299.121 59.58ZM299.121 59.58L333.851 79.63L299.121 99.68L264.391 79.63"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M426.691 51.19V210.75L461.421 190.7V31.14L426.691 51.19Z"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M426.691 210.75L391.961 190.7V31.14L426.691 51.19V210.75Z"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M426.691 11.09L461.421 31.14L426.691 51.19L391.961 31.14L426.691 11.09ZM426.691 11.09L461.421 31.14L426.691 51.19L391.961 31.14"
                stroke="black"
                strokeWidth="0.5"
                strokeMiterlimit="10"
              ></path>
            </svg>
          </div>
        );
      case "Product Release":
        return (
          <div>
            <p className="text-p-color font-medium lg:text-small mb-8">
              We will guide you through every step of the new product journey.
              From initial concept validation to execution, we ensure your in My
              Life product is poised for success.
            </p>
            <svg
              viewBox="0 0 482 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:size-[100%]"
            >
              <path
                d="M26.8281 122L26.8281 156M454.828 156V1M368.828 156V40M283.828 156V40M197.828 156V101M112.828 156V77M26.7969 121.866L112.409 76.6597L198.021 100.373L283.633 39.5701H369.245L454.857 1"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M25.9701 156C30.4828 156 34.9175 157.176 38.8373 159.412C42.7571 161.647 46.0266 164.866 48.3237 168.75L25.9701 181.97V156Z"
                fill="black"
              ></path>
              <path
                d="M43.8147 163.447C44.0039 163.63 44.1904 163.815 44.3739 164.003C45.7453 165.407 46.9567 166.97 47.9803 168.663L26.2201 181.532V156.251C30.603 156.294 34.9038 157.456 38.7134 159.629C40.5734 160.69 42.2855 161.974 43.8147 163.447ZM48.2384 169.091C50.4336 172.879 51.6903 177.278 51.6903 181.97C51.6903 196.175 40.175 207.69 25.9701 207.69C11.7653 207.69 0.25 196.175 0.25 181.97C0.25 167.849 11.6304 156.385 25.7201 156.251V181.97V182.408L26.0974 182.185L48.2384 169.091Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <mask id="Vector_path-4-inside-1-3002-1374" fill="white">
                <path d="M137.878 181.97C137.878 196.313 126.251 207.94 111.908 207.94C97.5647 207.94 85.9375 196.313 85.9375 181.97C85.9375 167.627 97.5647 156 111.908 156C126.251 156 137.878 167.627 137.878 181.97Z"></path>
                <path d="M111.908 156C116.42 156 120.855 157.176 124.775 159.412C128.695 161.647 131.964 164.866 134.261 168.75C136.558 172.634 137.804 177.05 137.875 181.562C137.945 186.074 136.839 190.527 134.665 194.481L111.908 181.97V156Z"></path>
              </mask>
              <path
                d="M111.908 156C116.42 156 120.855 157.176 124.775 159.412C128.695 161.647 131.964 164.866 134.261 168.75C136.558 172.634 137.804 177.05 137.875 181.562C137.945 186.074 136.839 190.527 134.665 194.481L111.908 181.97V156Z"
                fill="black"
              ></path>
              <path
                d="M134.665 194.481L134.425 194.92L134.863 195.16L135.104 194.722L134.665 194.481ZM111.908 181.97H111.408V182.266L111.667 182.408L111.908 181.97ZM137.378 181.97C137.378 196.037 125.974 207.44 111.908 207.44V208.44C126.527 208.44 138.378 196.589 138.378 181.97H137.378ZM111.908 207.44C97.8409 207.44 86.4375 196.037 86.4375 181.97H85.4375C85.4375 196.589 97.2886 208.44 111.908 208.44V207.44ZM86.4375 181.97C86.4375 167.903 97.8409 156.5 111.908 156.5V155.5C97.2886 155.5 85.4375 167.351 85.4375 181.97H86.4375ZM111.908 156.5C125.974 156.5 137.378 167.903 137.378 181.97H138.378C138.378 167.351 126.527 155.5 111.908 155.5V156.5ZM111.908 156.5C116.333 156.5 120.683 157.653 124.527 159.846L125.023 158.977C121.027 156.698 116.507 155.5 111.908 155.5V156.5ZM124.527 159.846C128.371 162.039 131.578 165.195 133.831 169.005L134.692 168.496C132.35 164.537 129.018 161.256 125.023 158.977L124.527 159.846ZM133.831 169.005C136.084 172.814 137.305 177.145 137.375 181.57L138.375 181.554C138.302 176.955 137.033 172.455 134.692 168.496L133.831 169.005ZM137.375 181.57C137.444 185.995 136.359 190.362 134.227 194.24L135.104 194.722C137.319 190.692 138.447 186.153 138.375 181.554L137.375 181.57ZM134.906 194.043L112.149 181.532L111.667 182.408L134.425 194.92L134.906 194.043ZM112.408 181.97V156H111.408V181.97H112.408Z"
                fill="black"
                mask="url(#Vector_path-4-inside-1-3002-1374)"
              ></path>
              <path
                d="M197.845 156C201.256 156 204.633 156.672 207.783 157.977C210.934 159.282 213.797 161.195 216.209 163.606C218.62 166.018 220.533 168.881 221.838 172.032C223.144 175.183 223.815 178.56 223.815 181.97C223.815 185.381 223.144 188.758 221.838 191.909C220.533 195.059 218.62 197.922 216.209 200.334C213.797 202.745 210.934 204.658 207.783 205.963C204.633 207.269 201.256 207.94 197.845 207.94V156Z"
                fill="black"
              ></path>
              <path
                d="M197.595 207.689C183.505 207.555 172.125 196.092 172.125 181.97C172.125 167.849 183.505 156.385 197.595 156.251V207.689ZM207.688 158.208C210.808 159.5 213.644 161.395 216.032 163.783C218.42 166.172 220.315 169.007 221.607 172.127C222.9 175.248 223.565 178.593 223.565 181.97C223.565 185.348 222.9 188.692 221.607 191.813C220.315 194.933 218.42 197.769 216.032 200.157C213.644 202.545 210.808 204.44 207.688 205.732C204.644 206.993 201.388 207.657 198.095 207.689V156.251C201.388 156.283 204.644 156.947 207.688 158.208Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M283.79 156C288.372 156 292.872 157.212 296.834 159.513C300.796 161.815 304.079 165.123 306.349 169.103C308.619 173.083 309.796 177.592 309.76 182.174C309.724 186.756 308.476 191.246 306.144 195.19C303.812 199.134 300.478 202.39 296.48 204.629C292.482 206.868 287.964 208.009 283.383 207.937C278.801 207.865 274.321 206.582 270.395 204.219C266.47 201.856 263.24 198.496 261.033 194.481L283.79 181.97V156Z"
                fill="black"
              ></path>
              <path
                d="M283.19 207.683L266.42 200.938M266.42 200.938L283.19 207.683C278.721 207.579 274.356 206.312 270.524 204.005C269.052 203.118 267.678 202.09 266.42 200.938Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M369.736 156C375.499 156 381.099 157.917 385.653 161.45C390.207 164.982 393.457 169.929 394.89 175.512C396.323 181.094 395.859 186.995 393.57 192.284C391.281 197.574 387.298 201.951 382.247 204.728C377.196 207.505 371.366 208.522 365.673 207.621C359.981 206.719 354.75 203.949 350.804 199.748C346.859 195.547 344.423 190.152 343.881 184.414C343.339 178.676 344.72 172.921 347.808 168.055L369.736 181.97V156Z"
                fill="black"
              ></path>
              <path
                d="M369.424 207.688L369.578 182.166M385.5 161.647C386.191 162.184 386.852 162.753 387.481 163.352C387.556 163.423 387.63 163.495 387.703 163.566C387.85 163.71 387.996 163.856 388.14 164.003C388.211 164.076 388.283 164.15 388.354 164.225C391.373 167.392 393.549 171.295 394.648 175.574C395.171 177.61 395.439 179.688 395.455 181.764C395.456 181.833 395.456 181.901 395.456 181.97C395.456 182.03 395.456 182.09 395.455 182.15C395.431 185.581 394.721 188.995 393.341 192.185C392.112 195.025 390.389 197.6 388.273 199.8C388.05 200.031 387.824 200.258 387.593 200.481C385.967 202.049 384.132 203.407 382.127 204.509C378.401 206.557 374.247 207.639 370.04 207.689C369.939 207.69 369.837 207.69 369.736 207.69C369.632 207.69 369.528 207.69 369.424 207.688L369.578 182.166L369.602 182.181L369.986 182.425V181.97V156.251C375.606 156.306 381.056 158.2 385.5 161.647Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <circle
                cx="455.673"
                cy="181.97"
                r="25.7201"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
              ></circle>
            </svg>
          </div>
        );
      case "Product Scale Up":
        return (
          <div>
            <p className="text-p-color font-medium lg:text-small mb-8">
              We will assess your current infrastructure, identify bottlenecks,
              and implement scalable solutions. With our expertise, you can
              confidently optimize performance, add new features and expand your
              user base.
            </p>

            <svg
              viewBox="0 0 482 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:size-[100%]"
            >
              <path
                d="M304.039 44.9999C304.039 42.7908 302.248 40.9999 300.039 40.9999H239.2C236.991 40.9999 235.2 42.7908 235.2 44.9999V56.9999C235.2 59.2091 236.991 60.9999 239.2 60.9999H300.039C302.248 60.9999 304.039 59.2091 304.039 56.9999V44.9999Z"
                fill="black"
              ></path>
              <path
                d="M1 125C1 122.791 2.79085 121 4.99999 121H98C100.209 121 102 122.791 102 125V137C102 139.209 100.209 141 98 141H5C2.79086 141 1 139.209 1 137V125Z"
                fill="black"
              ></path>
              <path
                d="M304.039 5C304.039 2.79086 305.83 1 308.039 1H476.999C479.208 1 480.999 2.79086 480.999 5V17C480.999 19.2091 479.208 21 476.999 21H308.039C305.83 21 304.039 19.2091 304.039 17V5Z"
                fill="black"
              ></path>
              <path
                d="M4.99999 121H131.684C133.893 121 135.684 119.209 135.684 117V105C135.684 102.791 133.893 101 131.684 101H5C2.79086 101 1 102.791 1 105V117C1 119.209 2.79085 121 4.99999 121ZM4.99999 121H98C100.209 121 102 122.791 102 125V137C102 139.209 100.209 141 98 141H5C2.79086 141 1 139.209 1 137V125C1 122.791 2.79085 121 4.99999 121ZM129 81H325C327.209 81 329 79.2091 329 77V65C329 62.7909 327.209 61 325 61H129C126.791 61 125 62.7909 125 65V77C125 79.2091 126.791 81 129 81ZM158.766 41.0001H419.386C421.595 41.0001 423.386 39.2092 423.386 37.0001V25.0001C423.386 22.7909 421.595 21.0001 419.386 21.0001H158.766C156.556 21.0001 154.766 22.7909 154.766 25.0001V37.0001C154.766 39.2092 156.556 41.0001 158.766 41.0001ZM300.039 60.9999H239.2C236.991 60.9999 235.2 59.2091 235.2 56.9999V44.9999C235.2 42.7908 236.991 40.9999 239.2 40.9999H300.039C302.248 40.9999 304.039 42.7908 304.039 44.9999V56.9999C304.039 59.2091 302.248 60.9999 300.039 60.9999ZM106 101H300C302.209 101 304 99.2091 304 97V85C304 82.7909 302.209 81 300 81H106C103.791 81 102 82.7909 102 85V97C102 99.2091 103.791 101 106 101ZM308.039 21H476.999C479.208 21 480.999 19.2091 480.999 17V5C480.999 2.79086 479.208 1 476.999 1H308.039C305.83 1 304.039 2.79086 304.039 5V17C304.039 19.2091 305.83 21 308.039 21Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
            </svg>
          </div>
        );
      case "Digital Transformation":
        return (
          <div>
            <p className="text-p-color font-medium lg:text-small mb-8">
              Our team specializes in transforming businesses, ensuring you
              leverage the latest technologies and methodologies. From strategy
              to execution, we'll revitalize your operations, making you more
              agile and efficient.
            </p>

            <svg
              viewBox="0 0 382 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[60%]"
            >
              <path
                d="M60.7031 44.7234C60.7031 50.1357 56.3125 54.5233 50.9023 54.5233C45.4883 54.5233 41.1016 50.1357 41.1016 44.7234C41.1016 39.3109 45.4883 34.9233 50.9023 34.9233C56.3125 34.9233 60.7031 39.3109 60.7031 44.7234Z"
                fill="black"
              ></path>
              <path
                d="M121.152 44.7234C121.152 50.1357 116.762 54.5233 111.352 54.5233C105.938 54.5233 101.551 50.1357 101.551 44.7234C101.551 39.3109 105.938 34.9233 111.352 34.9233C116.762 34.9233 121.152 39.3109 121.152 44.7234Z"
                fill="black"
              ></path>
              <path
                d="M90.9336 44.7234C90.9336 50.1357 86.543 54.5233 81.1328 54.5233C75.7188 54.5233 71.332 50.1357 71.332 44.7234C71.332 39.3109 75.7188 34.9233 81.1328 34.9233C86.543 34.9233 90.9336 39.3109 90.9336 44.7234Z"
                fill="black"
              ></path>
              <path
                d="M301.98 122.983L325.262 109.543L301.98 96.1033V122.983Z"
                fill="black"
              ></path>
              <path
                d="M270.941 122.983L294.223 109.543L270.941 96.1033V122.983Z"
                fill="black"
              ></path>
              <path
                d="M333.031 122.983L356.312 109.543L333.031 96.1033V122.983Z"
                fill="black"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.820312 44.3333C0.820312 20.1453 20.6016 0.363281 44.7891 0.363281H115.051C136.133 0.363281 153.863 15.3892 158.07 35.2629L217.719 0.823242V30.1768L248.109 12.6302V66.3333H380.93V66.5732H381.18V153.333H261.762L238.648 179.636V114.337L174.77 151.218L157.84 178.737V131.068L144.449 138.793L127.949 165.613V86.3651C123.871 87.6277 119.539 88.3032 115.051 88.3032H55.9727L30.8516 113.427V86.0233C13.4414 80.1597 0.820312 63.6516 0.820312 44.3333ZM44.7891 0.863281C20.8789 0.863281 1.32031 20.4214 1.32031 44.3333C1.32031 63.4917 13.8789 79.8588 31.1797 85.6061L31.3516 85.6628V112.22L55.7656 87.8032H115.051C119.449 87.8032 123.695 87.1465 127.699 85.9188V52.5089L157.559 35.2676C153.363 15.6683 135.855 0.863281 115.051 0.863281H44.7891ZM238.648 66.3333V113.76L174.41 150.848L158.34 176.97V65.0376L247.609 13.4962V66.3333H238.648ZM239.148 66.8333V178.31L261.535 152.833H380.68V66.8333H239.148Z"
                fill="black"
              ></path>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <div className="bg-[rgba(0,0,0,0.9)] text-white pe-10 flex flex-col justify-center">
        <div className="lg:container lg:mx-auto lg:mr-20 mb-4">
          <h1 className="text-small lg:text-lg max-w-md font-bold my-10 ml-6 leading-6 lg:leading-8 lg:text-left">
            We are dedicated to solving the critical challenges faced by CTOs
            and CPOs, both the strategic and execution levels.
          </h1>

          <div className="space-y-3">
            <div
              className={`flex items-center justify-between p-2.5 px-2.5 ${
                selectedOption === "Product Idea"
                  ? "bg-black scale-100 lg:scale-110"
                  : ""
              } hover:bg-[rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-[0.3s] ease-in-out`}
              onClick={() => setSelectedOption("Product Idea")}
            >
              <a
                href="#data"
                className="lg:text-small xs:text-lg lg:px-10 text-white"
              >
                If you have a{" "}
                <span className="font-semibold">Product Idea</span>
              </a>
              <span className="text-white text-lg lg:text-xl">
                <TiArrowRight className="text-p-color text-[30px]" />
                {" "}
              </span>
            </div>

            <div
              className={`flex items-center justify-between p-2.5 lg:pb-4 px-6  ${
                selectedOption === "Product Release"
                  ? "bg-black scale-105 lg:scale-110"
                  : ""
              } hover:bg-[rgba(0,0,0,0.2)] hover:scale-105 lg:hover:scale-110 transition-transform duration-[0.3s] ease-in-out`}
              onClick={() => setSelectedOption("Product Release")}
            >
              <a
                href="#data2"
                className="text-[14px] lg:lg:text-small xs:text-lg lg:px-10 text-p-color"
              >
                 If you need a{" "}
                <span className="font-semibold">Product Relese</span>
              </a>
              <span className="text-white text-lg lsg:text-xl">
                <TiArrowRight className="text-p-color text-[30px]" />
                {" "}
              </span>
            </div>

            <div
              className={`flex items-center justify-between p-2.5 lg:pb-4 px-6  ${
                selectedOption === "Product Scale Up"
                  ? "bg-black scale-105 lg:scale-110"
                  : ""
              } hover:bg-[rgba(0,0,0,0.2)] hover:scale-105 lg:hover:scale-110 transition-transform duration-[0.3s] ease-in-out`}
              onClick={() => setSelectedOption("Product Scale Up")}
            >
              <a
                href="#data2"
                className="text-[14px] lg:lg:text-small xs:text-lg lg:px-10 text-p-color"
              >
                 If you need a{" "}
                <span className="font-semibold">Product Scale Up</span>
              </a>
              <span className="text-white text-lg lg:text-xl">
                <TiArrowRight className="text-p-color text-[30px]" />
                {" "}
              </span>
            </div>

            <div
              className={`flex items-center justify-between p-2.5 lg:pb-4 px-6 ${
                selectedOption === "Digital Transformation"
                  ? "bg-black scale-105 lg:scale-110"
                  : ""
              } hover:bg-[rgba(0,0,0,0.2)] hover:scale-105 lg:hover:scale-110 transition-transform duration-[0.3s] ease-in-out`}
              onClick={() => setSelectedOption("Digital Transformation")}
            >
              <a
                href="#data3"
                className="text-[14px] lg:lg:text-small xs:text-lg lg:px-10 text-p-color"
              >
                 If you need a{" "}
                <span className="font-semibold">Transformation</span>
              </a>
              <span className="text-white text-lg lg:text-xl">
                <TiArrowRight className="text-p-color text-[30px]" />
                {" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-main-color lg:p-10 xs:pl-4 flex justify-center flex-col">
        <div className="container ml-0 py-4">{renderContent()}</div>
      </div>
      {/* Right Side */}
    </div>
  );
};

export default Business_Section;
