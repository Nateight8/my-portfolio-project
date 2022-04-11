import React from "react";
import Service from "./Service";

function Services() {
  return (
    <section className="w-full ">
      <h2 className="section_title">Services</h2>
      <Service heading="UI/UX Designer">
        <p className="service_para ">
          Maybe an unpopular opinion: the word "passionate" is over-used, so
          I'll rather say that I am a skilled user experience designer and for
          over three years I have learnt the best approach to better user
          experience design - user-centric!
        </p>
      </Service>
      <Service heading="Frontend Dev">
        <p className="service_para">
          Oh...less I forget to add, I am a User Experience designer who codes.
          I can bring an extra man power to the team. I love react and tailwind,
          they are a match made in heaven
        </p>
      </Service>
    </section>
  );
}

export default Services;
