import React from "react";
import Contact from "./Contact";
import Featured from "./Featured";
import HeroComponent from "./HeroComponent";
import Services from "./Services";
import Socials from "./Socials";

function Home() {
  return (
    <>
      <HeroComponent />
      <Services />
      <Featured />
      <Socials />
      <Contact />
    </>
  );
}

export default Home;
