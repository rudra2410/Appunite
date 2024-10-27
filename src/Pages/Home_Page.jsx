import React from "react";
import Hero_Section from "./Hero_Section";
import FAQ_Section from "./FAQ_Section";
import Help_Section from "./Help_Section";
import Case_Study from "./Case_Study";
import Employee from "./Employee";
import Slide from "./Slide";
import Business_Section from "./Business_Section";

const Home_Page = () => {
  return (
    <div>
      <Hero_Section />
      <FAQ_Section />
      <Help_Section />
      <Case_Study />
      <Employee />
      <Slide />
      <Business_Section />
    </div>
  );
};

export default Home_Page;
