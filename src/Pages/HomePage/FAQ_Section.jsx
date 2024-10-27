import React, { useState } from "react";
import { TiArrowRight } from "react-icons/ti";

const FAQ_Section = () => {
  const [selectedOption, setSelectedOption] = useState("Product Idea");

  // Content for the right side based on selection
  const renderContent = () => {
    switch (selectedOption) {
      case "Product Idea":
        return (
          <div>
            <p className="text-[#ffefef] font-normal text-[16px] mb-8">
              We will help you optimize your endeavors for the best business
              outcome by researching the market and validating digital product
              concepts. Then, we foster optimal user journeys with Product
              Discovery Sprints.
            </p>
            <svg
              viewBox="0 0 580 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:size-[100%]"
            >
              <path
                d="M88 88C85.7909 88 84 89.7909 84 92V152.839C84 155.048 85.7909 156.839 88 156.839L100 156.839C102.209 156.839 104 155.048 104 152.839V92C104 89.7909 102.209 88 100 88H88Z"
                fill="black"
              ></path>
              <path
                d="M413.84 59C413.84 56.7909 412.049 55 409.84 55H349.001C346.792 55 345.001 56.7909 345.001 59V71C345.001 73.2091 346.792 75 349.001 75H409.84C412.049 75 413.84 73.2091 413.84 71V59Z"
                fill="black"
              ></path>
              <path
                d="M116 157C113.791 157 112 155.209 112 153L112 21C112 18.7909 113.791 17 116 17H128C130.209 17 132 18.7909 132 21V153C132 155.209 130.209 157 128 157H116Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M60 157C57.7909 157 56 155.209 56 153L56 52C56 49.7909 57.7909 48 60 48H72C74.2091 48 76 49.7909 76 52L76 153C76 155.209 74.2091 157 72 157H60Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M88 88C85.7909 88 84 89.7909 84 92V152.839C84 155.048 85.7909 156.839 88 156.839L100 156.839C102.209 156.839 104 155.048 104 152.839V92C104 89.7909 102.209 88 100 88H88Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M144 157C141.791 157 140 155.209 140 153V60C140 57.7909 141.791 56 144 56H156C158.209 56 160 57.7909 160 60V153C160 155.209 158.209 157 156 157H144Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M5 157C2.79086 157 1 155.209 1 153L1 60C1 57.7909 2.79086 56 5 56H17C19.2091 56 21 57.7909 21 60L21 153C21 155.209 19.2091 157 17 157H5Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M32 157C29.7909 157 28 155.209 28 153L28 5C28 2.79086 29.7909 1 32 1L44 1C46.2091 1 48 2.79086 48 5L48 153C48 155.209 46.2091 157 44 157H32Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M284 86C284 83.7909 285.791 82 288 82H420C422.209 82 424 83.7909 424 86V98C424 100.209 422.209 102 420 102H288C285.791 102 284 100.209 284 98V86Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M372 32C372 29.7909 373.791 28 376 28H477C479.209 28 481 29.7909 481 32V44C481 46.2091 479.209 48 477 48H376C373.791 48 372 46.2091 372 44V32Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M413.84 59C413.84 56.7909 412.049 55 409.84 55H349.001C346.792 55 345.001 56.7909 345.001 59V71C345.001 73.2091 346.792 75 349.001 75H409.84C412.049 75 413.84 73.2091 413.84 71V59Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M220 113C220 110.791 221.791 109 224 109H344C346.209 109 348 110.791 348 113V125C348 127.209 346.209 129 344 129H224C221.791 129 220 127.209 220 125V113Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M220 140C220 137.791 221.791 136 224 136H317C319.209 136 321 137.791 321 140V152C321 154.209 319.209 156 317 156H224C221.791 156 220 154.209 220 152V140Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
              <path
                d="M325 5C325 2.79086 326.791 1 329 1L477 1C479.209 1 481 2.79086 481 5V17C481 19.2091 479.209 21 477 21H329C326.791 21 325 19.2091 325 17V5Z"
                stroke="black"
                strokeWidth="0.5"
              ></path>
            </svg>
          </div>
        );
      case "Product Release":
        return (
          <div>
            <p className="text-sub-color font-medium text-[16px] mb-8">
              We will guide you through every step of the new product journey.
              From initial concept validation to execution, we ensure your in My
              Life product is poised for success.
            </p>
            <svg
              viewBox="0 0 351 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:size-[100%]"
            >
              <path
                d="M193.699 56.56V78.75L208.159 70.4V57.35L200.249 52.78L193.699 56.56Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M193.698 34.38L174.488 45.47L193.698 56.55L200.248 52.77L193.708 48.99V34.37L193.698 34.38Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M193.7 56.56V78.75L177.42 69.35V62.97L174.5 61.28V45.47L193.7 56.56Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M249.012 65.64V76.49L258.352 71.07L249.012 65.65V65.64Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M225.181 119.48L212.271 126.94L206.441 123.57L200.141 127.21L238.561 149.38V127.21L225.181 119.48Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M212.27 104.76V126.95L225.18 119.49L219.35 116.13V100.68L212.27 104.77V104.76Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M212.269 82.58L193.059 93.67L212.269 104.76L219.349 100.67V93.94L225.649 90.3L212.269 82.58Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M212.269 104.76V126.95L193.059 115.86V93.67L212.269 104.76Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M212.908 37.91V46.26L227.358 37.91L232.108 40.65V26.81L212.898 37.9L212.908 37.91Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M212.909 15.73L193.699 26.82L212.909 37.9L232.129 26.81L212.919 15.72L212.909 15.73Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M212.911 37.91V46.26L208.151 49.01V57.35L193.711 49V26.81L212.911 37.9V37.91Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M96.5195 37.56V59.75L115.72 48.66V26.47L96.5195 37.56Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M96.5186 15.38L77.3086 26.47L96.5186 37.55L115.729 26.46L96.5186 15.38Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M96.5186 37.56V59.75L77.3086 48.66V26.47L96.5186 37.56Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M148.52 26.56V48.75L167.72 37.66V15.46L148.52 26.55V26.56Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M148.519 4.38L129.309 15.47L148.519 26.55L167.729 15.46L148.519 4.38Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M148.519 26.56V48.75L129.309 37.66V15.46L148.519 26.55V26.56Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M168.059 108.47V130.66L187.259 119.57V97.38L168.059 108.47Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M158.2 96.24L154.51 94.11L148.84 97.38L168.05 108.46L187.26 97.37L171.74 88.41L158.19 96.23L158.2 96.24Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M168.052 108.47V130.66L148.852 119.57V97.38L168.052 108.47Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M26.5195 26.91V49.1L45.7195 38.01V15.82L26.5195 26.91Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M26.5286 4.73001L7.30859 15.82L26.5186 26.9L45.7286 15.81L26.5286 4.73001Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M26.5203 26.91V49.1L7.32031 38.01V15.82L26.5203 26.91Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M268.219 32.38L277.839 37.93L287.419 32.36V21.28L268.219 32.37V32.38Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M268.222 10.2L249.012 21.29L268.222 32.37L287.432 21.28L268.222 10.2Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M258.562 26.81L249.012 32.33V21.29L258.562 26.81Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M258.552 49L239.352 37.91V44.84L246.572 49.01V64.27L258.352 71.07L277.702 60.04L258.552 49Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M238.562 82.84L219.352 93.93L238.562 105.01V82.83V82.84Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M227.359 60.09V82.28L246.559 71.19V49L227.359 60.09Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M227.358 37.91L208.148 49L227.358 60.08L246.568 48.99L227.358 37.9V37.91Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M227.358 60.09V82.28L208.148 71.19V49L227.358 60.09Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M266.309 98.35V187.48L343.989 142.91V53.78L266.309 98.34V98.35Z"
                fill="black"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M316.259 37.93L297.049 26.85L277.839 37.94L277.769 37.9L258.559 26.81L239.349 37.9L258.559 48.98L277.699 60.03L238.539 82.48L266.309 98.34L344.029 53.78L316.259 37.92V37.93Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M238.548 82.46V105.03L219.348 93.94V116.13L238.548 127.22V149.41L219.348 138.32L200.148 127.23V149.42L219.348 160.51L238.548 171.6L266.308 187.49V98.36L238.548 82.47V82.46Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M158.199 74.05V96.24L177.399 85.15V62.96L158.199 74.05Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M158.2 51.88L138.98 62.97L158.19 74.05L177.4 62.96L158.19 51.88H158.2Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M158.2 74.05V96.24L139 85.15V62.96L158.2 74.05Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M103.41 71.19V93.38L122.61 82.29V60.1L103.41 71.19Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M96.5192 59.74L90.6692 56.36L84.1992 60.1L103.409 71.18L122.619 60.09L109.259 52.38L96.5192 59.74Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M103.411 71.19V93.38L84.2109 82.29V60.1L103.411 71.19Z"
                stroke="#231F20"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
            </svg>
          </div>
        );
      case "Product Scale Up":
        return (
          <div>
            <p className="text-sub-color font-medium text-[16px] mb-8">
              We will assess your current infrastructure, identify bottlenecks,
              and implement scalable solutions. With our expertise, you can
              confidently optimize performance, add new features and expand your
              user base.
            </p>
            <svg
              viewBox="0 0 481 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:size-[100%]"
            >
              <path
                d="M203.61 62.2348L223.72 50.6648V73.8048L203.61 85.3748V62.2348Z"
                fill="black"
              ></path>
              <path
                d="M353.83 48.8748L436.52 1.11477V27.2348L398 49.6048V118.875L353.83 144.385V48.8748Z"
                fill="black"
              ></path>
              <path
                d="M274.04 61.3248L294.15 49.7548V72.8948L274.04 84.4648V61.3248Z"
                fill="black"
              ></path>
              <path
                d="M293.87 50.0648L436.43 0.884766M273.96 61.4548L353.79 48.6248M274.15 85.0248L353.98 144.185M294 73.5748L398 90.7348M132.55 27.2348V121.175M112.29 38.9248V132.865M152.81 15.4448V109.385M91.92 97.6048L173.27 50.6348M91.91 74.2148L173.26 27.2448M91.83 121.055L173.18 74.0848M223.77 27.2348V121.175M203.52 38.9248V132.865M244.04 15.4448V109.385M183.15 97.6048L264.5 50.6348M183.14 74.2148L264.49 27.2448M183.06 121.055L264.41 74.0848M398 49.6048L436.52 27.2348V1.11477L353.83 48.8748V144.385L398 118.875V49.6048ZM398 49.6048L480.68 1.84477V97.3548L398 145.115V49.6048ZM1 48.6748L82.04 1.70477V95.6448L1 142.615V48.6748ZM92.02 50.7248L173.07 3.75477V97.6948L92.03 144.665V50.7248H92.02ZM183.25 50.7248L264.3 3.75477V97.6948L183.25 144.665V50.7248ZM203.61 62.2348L223.72 50.6648V73.8048L203.61 85.3748V62.2348ZM274.04 61.3248L294.15 49.7548V72.8948L274.04 84.4648V61.3248Z"
                stroke="black"
                strokeWidth="0.5"
                stroke-miterlimit="10"
              ></path>
            </svg>
          </div>
        );
      case "Digital Transformation":
        return (
          <div>
            <p className="text-sub-color font-medium text-[16px] mb-8">
              Our team specializes in transforming businesses, ensuring you
              leverage the latest technologies and methodologies. From strategy
              to execution, we'll revitalize your operations, making you more
              agile and efficient.
            </p>
            <svg
              viewBox="0 0 455 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:size-[100%]"
            >
              <path
                d="M301.39 1H334.39V30.5L328.39 24.1H301.39V1Z"
                fill="black"
              ></path>
              <path
                d="M56.95 87.59H89.95V117.09L83.95 110.69H56.95V87.59Z"
                fill="black"
              ></path>
              <path
                d="M439.66 1H454.66M454.66 1V16M454.66 1L378.96 68.97L334.39 30.5M334.39 30.5L125.6 158.57L89.95 117.09M334.39 30.5V1H301.39V24.1H328.39L334.39 30.5ZM89.95 117.09L1 158.57M89.95 117.09V87.59H56.95V110.69H83.95L89.95 117.09ZM112.16 1.04H227.8V93.78L215.98 80.4H112.16V1.04Z"
                stroke="black"
                strokeWidth="0.5"
                stroke-miterlimit="10"
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
        <div className="container mr-20">
          <h2 className="text-[18px] lg:text-[24px] max-w-md font-bold my-10 lg:mb-20 ml-10 leading-6 lg:leading-8 lg:text-left">
            We are dedicated to solving the critical challenges faced by CTOs
            and CPOs, both the strategic and execution levels.
          </h2>

          <div className="space-y-3">
            <div
              className={`flex items-center justify-between p-3 lg:p-2.5 ${
                selectedOption === "Product Idea"
                  ? "bg-black scale-100 lg:scale-110"
                  : ""
              } hover:bg-[rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-[0.3s] ease-in-out`}
              onClick={() => setSelectedOption("Product Idea")}
            >
              <a
                href="#data"
                className="text-[14px] lg:text-[16px] px-10 text-white"
              >
                If you have a{" "}
                <span className="font-semibold">Product Idea</span>
              </a>
              <span className="text-white text-lg lg:text-xl">
                <TiArrowRight className="text-sub-color text-[30px]" />
              </span>
            </div>

            <div
              className={`flex items-center justify-between p-2.5 lg:pb-4 px-8 lg:px-20 ${
                selectedOption === "Product Release"
                  ? "bg-black scale-100 lg:scale-110"
                  : ""
              } hover:bg-[rgba(0,0,0,0.2)] hover:scale-100 lg:hover:scale-110 transition-transform duration-[0.3s] ease-in-out`}
              onClick={() => setSelectedOption("Product Release")}
            >
              <a
                href="#data1"
                className="text-[14px] lg:text-[16px] px-10 text-sub-color"
              >
                If you want a{" "}
                <span className="font-semibold">Product Release</span>
              </a>
              <span className="text-white text-lg lg:text-xl">
                <TiArrowRight className="text-sub-color text-[30px]" />
              </span>
            </div>

            <div
              className={`flex items-center justify-between p-2.5 lg:pb-4 px-8 lg:px-20 ${
                selectedOption === "Product Scale Up"
                  ? "bg-black scale-105 lg:scale-110"
                  : ""
              } hover:bg-[rgba(0,0,0,0.2)] hover:scale-105 lg:hover:scale-110 transition-transform duration-[0.3s] ease-in-out`}
              onClick={() => setSelectedOption("Product Scale Up")}
            >
              <a
                href="#data2"
                className="text-[14px] lg:text-[16px] px-10 text-sub-color"
              >
                If you need a{" "}
                <span className="font-semibold">Product Scale Up</span>
              </a>
              <span className="text-white text-lg lg:text-xl">
                <TiArrowRight className="text-sub-color text-[30px]" />
              </span>
            </div>

            <div
              className={`flex items-center justify-between p-2.5 lg:pb-4 px-8 lg:px-20 ${
                selectedOption === "Digital Transformation"
                  ? "bg-black scale-105 lg:scale-110"
                  : ""
              } hover:bg-[rgba(0,0,0,0.2)] hover:scale-105 lg:hover:scale-110 transition-transform duration-[0.3s] ease-in-out`}
              onClick={() => setSelectedOption("Digital Transformation")}
            >
              <a
                href="#data3"
                className="text-[14px] lg:text-[16px] px-10 text-sub-color"
              >
                If you need a{" "}
                <span className="font-semibold">Digital Transformation</span>
              </a>
              <span className="text-white text-lg lg:text-xl">
                <TiArrowRight className="text-sub-color text-[30px]" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-main-color p-6 lg:p-10 flex justify-center flex-col">
        <div className="container ml-0">{renderContent()}</div>
      </div>
      {/* Right Side */}
    </div>
  );
};

export default FAQ_Section;
