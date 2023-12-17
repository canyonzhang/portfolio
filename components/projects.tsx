import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} /> {/* Pass the entire project object to the project*/}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Project({title, description, tags, imageUrl}) {
    return <div>{title}</div>
}
