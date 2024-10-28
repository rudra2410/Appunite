import React from "react";

const Hero_Section = () => {
  return (
    <div className="flex justify-center items-center" id="#hero">
      <section className="lg:container lg:py-40 py-10 xs:px-3">
        <div className="flex justify-center items-center text-start">
          <h1 className="lg:text-larger xs:text-large lg:leading-[50px] max-w-4xl font-medium lg:text-center xs:text-start">
            <span className="text-black font-black break-all">
              We consult and build digital product{" "}
            </span>
            ensure every dollar spent on technology yields tangible business
            results
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Hero_Section;
