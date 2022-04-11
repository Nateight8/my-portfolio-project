import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="w-full h-screen text-[15vw] font-queensTrial font-thin flex justify-center items-center ">
      <h1 className="hover:cursor-pointer">
        <Link to="contact"> Contact Me </Link>
      </h1>
    </section>
  );
}

export default Contact;
