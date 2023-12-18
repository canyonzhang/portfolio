import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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