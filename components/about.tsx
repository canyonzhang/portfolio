"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView('About');
  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My past experiences have taken me across multiple industries{" "} where I've driven 
        <span className="font-medium"> impactful projects</span>, ranging from developing applications that 
        <span className="font-medium"> streamline data visualization to enhancing data quality in patient medication delivery.</span>
        {" "} Whatever the task may be,
         I always strive to maintain a high level of quality and execution in my work, to provide something of 
         value to others, and I'm passionate about continuing to grow my skills and knowledge as an engineer. 
         </p>
         <p>
          My core stack for developing web applications is
          <span className="font-medium">
            {" "} React, Next.js, Node.js, and MongoDB/Firebase
          </span>
          . I also have experience with Python, C++, and Typescript as well as iOS and Android mobile development.
          I am currently looking for a&nbsp;
          <span className="font-medium" style={{ whiteSpace: 'nowrap' }}>
            full-time position as a software engineer.
          </span>
        </p>
      
      <p>
       Aside from coding, I enjoy playing
        basketball, lifting weights, and exploring nature with friends. I always love to 
        experience and see new places, meet new people, and try new things (mostly food). {" "}
        <span className="font-medium">Thanks for checking out my website and don't hesitate to reach out!</span>
      </p>
    </motion.section>
  );
}