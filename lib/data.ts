import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiIbm } from "react-icons/si";
import { AstraZenecaIcon, IntelIcon, OmniloreIcon, } from '@/components/icons';
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
    title: "Software Engineer (Intel Corporation)",
    location: "Remote",
    description:"Optimizing the WISTA ETL pipeline for wafer image processing by enhancing CI/CD workflows, Kubernetes deployments, and SQL-based data extraction, improving scalability and reducing processing latency.",
    icon: React.createElement(IntelIcon),
    date: "Jul 2024 - Present",
  },
  {
    title: "Software Engineer (Omnilore)",
    location: "Los Angeles, CA",
    description:"Collaborated with a team of six to design and develop a SQL database for Omnilore Learning-In-Retirement, focusing on tracking finances and membership data. Additionally, implemented AWS EC2 cloud services to execute regular cron jobs.",
    icon: React.createElement(OmniloreIcon),
    date: "Jan 2024 - May 2024",
  },
  {
    title: "Software Engineering Intern (IBM)",
    location: "New York City, NY",
    description:
      "Created a Data Observation Platform to enhance error detection in validation jobs for EPM Data Scientists and SMEs. Additionally, integrated a Python-based producer-consumer messaging queue running on an Apache Kafka pod, populating databases",
    icon: React.createElement(SiIbm),
    date: "May 2023 - August 2023",
  },
  {
    title: "Teaching Assistant/Course Producer (USC)",
    location: "Los Angeles, CA",
    description:
      "Host office hours and grade assignments for courses in Introduction to Operating Systems and Programming in Python, focusing on practical applications like multithreading, system calls, and memory management techniques such as MLFQ scheduling and copy-on-write forking.",
    icon: React.createElement(USCIcon),
    date: "September 2022 - May 2024",
  },
  {
    title: "Software Engineering Intern (AstraZeneca)",
    location: "Gaithersburg, MD",
    description: "Conducted research and developed machine learning models for detecting outliers in patient medication delivery data. Also engineered an application to automate the allocation of server resources among engineering teams at AZ.",
    icon: React.createElement(AstraZenecaIcon),
    date: "May 2022 - August 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Local Explorer",
    description:
      "IOS app allowing users to navigate and search for nearby restaurants entertainment and attractions.",
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
    url: "https://gif-encoder.vercel.app/documentation"
  },
  {
    "title": "Preemptive Multilevel Feedback Queue Scheduler",
    "description": "Implemented a preemptive MLFQ scheduler in xv6, introducing three priority queues, aging, and a periodic boost to prevent starvation. Designed a new syscall to retrieve scheduling statistics and developed test cases to analyze scheduler performance.",
    "tags": ["C", "xv6", "Operating Systems", "Kernel Development", "Scheduling"],
    "imageUrl": "/scheduling.gif",
    "url": "https://github.com/canyonzhang/xv6-mlfq"
  },  
  {
    title: "BeachBuddy",
    description:
      "Apart of a team of 3 developers to build a beach planning app leveraging Google Maps API and following SDLC principles.",
    tags: ["AndroidStudio", "Java", "Android SDK", "Google Maps API", "Espresso", "JUnit"],
    imageUrl: "/SoCalBeachForLife.gif",
    url: "https://github.com/a-harhar/SoCalBeach4Life"
  },
  {
    title: "ChatPDF",
    description:
      "Streamlit application that uses langchain and GPT 3.5 to answer user questions based on uploaded PDFs.",
    tags: ["Streamlit", "Langchain", "Python", "OpenAI API", "Vector Databases", "FAISS"],
    imageUrl: "/chat-gpt.gif",
    url: "https://chatpdfdocs.streamlit.app/"
  },
] as const;

export const skillsData = [
  "Python",
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Docker", 
  "Helm", 
  "Kubernetes",
  "Next.js",
  "Node.js",
  "Express",
  "Vue.js",
  "Git",
  "Tailwind",
  "MySQL",
  "FastAPI",
  "Supabase",
  "Prisma",
  "MongoDB",
  "Firebase",
  "Swift/SwiftUI",
  "Java",
  "C++",
  "Dart/Flutter",
  "Vercel"
] as const;