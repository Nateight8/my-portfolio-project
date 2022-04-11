import React from "react";

function ContactMe() {
  return (
    <section className="w-full flex items-center flex-col   ">
      <div className="py-16 w-full text-[#121921] text-center bg-[#E9F1F4]">
        <h2 className="text-[8vw] font-queensTrial font-thin leading-none mb-3 ">
          Contact Me
        </h2>
        <h3 className="text-4xl font-thin font-Graphiklight capitalize">
          Lets work together
        </h3>
      </div>
      <div className="py-14 px-8 font-thin font-Graphiklight mx-auto w-full sm:w-[35rem] flex flex-col items-start justify-center ">
        <h3 className="text-4xl mb-4 font-light">Get in touch</h3>
        <p className=" text-lg md:text-2xl mb-12 opacity-90">
          Got a project? Together lets get that big idea started. Tech firm?
          I'll be MORE than excited to work with your team and take on new
          challenges
        </p>

        <form action="" className="w-full h-full ">
          <input
            type="name"
            name=""
            id=""
            placeholder="Name"
            className="input "
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="input"
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="input"
            placeholder="Message"
          ></textarea>

          <button
            type="submit"
            className="w-full font-Graphiklight  font-normal text-lg md:text-2xl py-2 md:py-3 pl-4 text-[#121921] bg-[#E9F1F4]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
