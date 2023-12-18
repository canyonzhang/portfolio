"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";



export default function Experience() {
    const {ref} = useSectionInView('Experience');
// {console.log("EXPERIENCES DATA IS", experiencesData)};
  return (
    <section id="experience">
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor="#ffffff">
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
    </section>
  );
}

