import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiIbm } from "react-icons/si";
import { AstraZenecaIcon, } from '@/components/icons';
import {USCIcon} from '@/components/icons';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Intern",
    location: "Gaithersburg, Maryland",
    description:
      "Developed and trained machine learning models to detect outliers in patient medication delivery data.",
    icon: React.createElement(AstraZenecaIcon),
    date: "May 2022 - August 2022",
  },
  {
    title: "Full-Stack Software Engineering Intern (IBM)",
    location: "New York, New York",
    description:
      "Developed a Data Observation Platform for EPM Data Scientists and SMEs to streamline error discovery for validation jobs.",
    icon: React.createElement(SiIbm),
    date: "May 2023 - August 2023",
  },
  {
    title: "Teaching Assistant/Course Producer (USC)",
    location: "Los Angeles, CA",
    description:
      "Host office hours to debug student assignments that I also grade for Introduction to Operating Systems and Programming in Python.",
    icon: React.createElement(USCIcon),
    date: "September 2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Local Explorer",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Swift", "SwiftUI", "MapKit", "Firebase"],
    imageUrl: "/Local_explorer.gif",
    url: "https://github.com/canyonzhang/LocalExplorer/tree/main"
  },
  {
    title: "Gif-Encoder",
    description:
      "Built a website to generate gifs from images the user uploaded from their device",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "PlanetScale", "Prisma"],
    imageUrl: "/nyan_cat.gif",
    url: "https://interview-theta-two.vercel.app/documentation"
  },
  {
    title: "BeachBuddy",
    description:
      "Implemented a mobile beach planning app leveraging Google Maps ",
    tags: ["AndroidStudio", "Java", "Android SDK", "Google Maps API", "Espresso", "JUnit"],
    imageUrl: "/SoCalBeachForLife.gif",
    url: "https://github.com/a-harhar/SoCalBeach4Life"
  },
] as const;

export const skillsData = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Vue.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Swift",
  "Java",
  "C++",
  "Framer Motion",
] as const;