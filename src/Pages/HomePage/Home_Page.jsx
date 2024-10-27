import React from "react";
import Hero_Section from "../HomePage/Hero_Section";
import FAQ_Section from "../HomePage/FAQ_Section";
import Help_Section from "../HomePage/Help_Section";
import Slide from "../HomePage/Slide";
import Contact from "../HomePage/Contact";
import Employee from "../HomePage/Employee";
import Business_Section from "../HomePage/Business_Section";
import Articles from "../HomePage/Articles";

const Home_Page = () => {
  return (
    <div>
      <Hero_Section />
      <FAQ_Section />
      <Help_Section />
      <Employee />
      <Slide />
      <Business_Section />
      <Articles />
      <Contact />
      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default Home_Page;
