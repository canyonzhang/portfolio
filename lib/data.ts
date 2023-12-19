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
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(AstraZenecaIcon),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Software Engineering Intern (IBM)",
    location: "New York, New York",
    description:
      "I worked as apart of the EPM team to develop a Data Observation Center for Data Scientists and SMEs to streamline error discovery",
    icon: React.createElement(SiIbm),
    date: "May 2023 - August 2023",
  },
  {
    title: "Teaching Assistant/Course Producer (USC)",
    location: "Los Angeles, CA",
    description:
      "I host office hours to help debug student assignments as well as grade the assignments for Introduction to Operating Systems and Programming in Python (USC)",
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
  },
  {
    title: "Gif-Encoder",
    description:
      "Built a website to generate gifs from images the user uploaded from their device",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "PlanetScale", "Prisma"],
    imageUrl: "/nyan_cat.gif",
  },
  {
    title: "MineSweeper",
    description:
      "Implemented the classic Minesweeper game on Android Studio using Java and the Android SDK.",
    tags: ["AndroidStudio", "Java", "Android SDK"],
    imageUrl: "/Minesweeper.gif",
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