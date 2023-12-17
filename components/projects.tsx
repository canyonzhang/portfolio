import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

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

type ProjectProps = typeof projectsData[number];

function Project({title, description, tags, imageUrl}: ProjectProps) {
    return <section className="bg-gray">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
        <Image width={400} height={400} src={imageUrl} alt={title} quality={95}/>

    </section>

}
