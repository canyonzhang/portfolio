"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const {ref} = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
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
