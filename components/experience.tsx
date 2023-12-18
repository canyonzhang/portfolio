"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";



export default function Experience() {
    const {ref} = useSectionInView('Experience');
  return (

    <motion.section 
    initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    ref={ref} id="experience" className="scroll mt-28 mb-28 sm:mb-40 ">
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline animate={true} lineColor="#ffffff">
            {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        background: "#dce0e6",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                        color: "black", // This sets the text color to dark gray
                    }}
                    contentArrowStyle={{
                        borderRight: "0.4rem solid #b1b5ba",
                    }}
                    date={item.date}
                    dateClassName="my-custom-date"
                    icon ={item.icon}
                    iconStyle={{background: "#abadb0"}}
                >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">{item.description }</p>
                </VerticalTimelineElement>
            </React.Fragment>
            ))}
        </VerticalTimeline>
    </motion.section>
  );
}

