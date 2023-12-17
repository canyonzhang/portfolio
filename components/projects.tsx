"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({threshold: 0.5}); // only consider the section in view if it is 75 percent in view
  const {setActiveSection} = useActiveSectionContext();

    useEffect(() => {
      if (inView) {
        setActiveSection("Projects");
      }
      console.log(inView);
    }, [inView, setActiveSection]); 
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

// type ProjectProps = typeof projectsData[number];

// function Project({title, description, tags, imageUrl}: ProjectProps) {
//     return <section className="bg-gray-100 max-w-[42rem] border border">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <ul>
//             {tags.map((tag, index) => (
//                 <li key={index}>{tag}</li>
//             ))}
//         </ul>
//         <Image width={400} height={400} src={imageUrl} alt={title} quality={95}/>

//     </section>

// }
