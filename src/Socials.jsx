import React from "react";
import Social from "./Social";

function Socials() {
  return (
    <section className="w-full my-80">
      <h2 className="section_title py-[2vh]">Socials</h2>
      <div className="flex flex-col justify-center items-center">
        <Social social={"Dribbble"} />
        <Social social={"Github"} />
        <Social social={"instagram"} />
      </div>
    </section>
  );
}

export default Socials;
