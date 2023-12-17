"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
//   const { ref } = useSectionInView("About");

  return (
    <motion.section
    //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* <SectionHeading>About me</SectionHeading> */}
      <p className="mb-3">
        My past experiences have taken me across multiple industries{" "} where I've driven 
        <span className="font-medium"> impactful projects</span>, ranging from developing applications that 
        <span className="font-medium"> streamline data visualization to enhancing data quality in patient medication delivery.</span>
        {" "} Whether it is full-stack web development, data engineering, or teaching,
         <span className="italic">I have always strived to maintain a high level of quality and execution in my work, and to provide something of 
         value to others.</span> I am focused on leveraging technology to <span className="font-medium">make complex systems user-friendly,</span> 
         and I'm passionate about continuing to grow my skills as a full stack developer to provide value to as many end users as possible. 
         <br />
         My core stack for developing web applications is
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also comfortable with Python, C++, and Typescript and I am quick to learn on the fly. 
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic">Aside from coding</span>, I enjoy playing
        basketball, lifting weights, and enjoying nature with friends. I always love to 
        experience different places and meet new people and try new things (mostly food) {" "}
        <span className="font-medium">Thanks for checking out my work and I hope to connect!</span>. 
      </p>
    </motion.section>
  );
}