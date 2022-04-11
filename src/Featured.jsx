import { Link } from "react-router-dom";
import FeaturedProject from "./FeaturedProject";

const Featured = () => {
  return (
    <section className="my-80 ">
      <h2 className="section_title py-[2vh]">Featured Projects</h2>
      <FeaturedProject project={"Any-Innovation works"} />
      <FeaturedProject project={"Background works"} />
      <FeaturedProject project={"Solid Mountain tops"} />
      <FeaturedProject project={"Theragist -Social network"} />
      <h2 className="section_title py-[2vh] cursor-pointer">
        <Link to="projects"> See other projects </Link>
      </h2>
    </section>
  );
};

export default Featured;
