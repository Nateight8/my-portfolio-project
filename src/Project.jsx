import React from "react";
import img from "../src/2.png";

function Project() {
  return (
    <div className="w-full py-20 my-20  md:h-screen flex justify-center items-center ">
      {/* flex */}
      <div className=" mb-24 mx-auto  w-[90vw] md:w-[70vw] lg:w-[60vw] h-[40vh] relative sm:h-[50vh] md:h-[60vh]">
        <div className="img-wraper w-full h-full   ">
          <img
            src={img}
            alt=""
            srcset=""
            className="w-full h-full object-cover object-top absolute"
          />
          <div className="overlay hover:cursor-pointer group absolute w-full h-full hover:bg-[#121921] ease-in-out transition-all duration-700 hover:bg-opacity-80">
            <h3 className=" opacity-0 group-hover:opacity-100  top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-6xl font-Graphiklight font-thin tracking-widest ">
              Explore
            </h3>
          </div>
        </div>
        <div className="project_info my-7">
          <h2 className=" text-5xl font-queensTrial font-light my-2">
            Any-Innovation
          </h2>
          <p className="project_info_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            laboriosam!
          </p>
          <p className="project_info_para ">
            Role : <span className="">Ux Design</span>
          </p>
        </div>
      </div>{" "}
      {/* flex */}
    </div>
  );
}

export default Project;
