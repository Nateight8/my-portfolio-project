import React from "react";
import img from "../src/1.jpg";

function HeroComponent() {
  return (
    <section className="relative h-screen ">
      <div className="  absolute lg:top-[30%]  bottom-[10%] left-[5%] ">
        {/* text */}
        <h1 className=" md:text-[8vw] text-8xl font-queensTrial mb-3">
          I Dev & <br /> Design
        </h1>
        {/* mx-auto md:mx-0 */}
        <p className=" text-2xl leading-normal font-thin font-Graphiklight w-[90%] sm:w-[60%] md:w-[50%]">
          Welcome to my space, I am Jonathan a User Experience Designer and a
          React Developer based in Nigeria. Feel free to reach out to me about
          any project
        </p>
        {/* text */}
      </div>
      <div className=" profileImage">
        <div className="overlays" />
        <img
          src={img}
          alt=""
          srcset=""
          className="w-full h-full object-cover  object-bottom"
        />
      </div>
    </section>
  );
}

export default HeroComponent;
