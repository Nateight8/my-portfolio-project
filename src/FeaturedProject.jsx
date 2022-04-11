import img from "../src/featured1.png";

function FeaturedProject({ project }) {
  return (
    <div className="my-16 md:my-96 h-screen px-8 ">
      <div className="relative h-screen flex flex-col justify-center items-center">
        <img src={img} alt="" className="object-contain w-[60vw] " />
        <h3 className="project_name text-center capitalize  -mt-24">
          {project}
        </h3>
      </div>
    </div>
  );
}

export default FeaturedProject;
