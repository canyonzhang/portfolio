"use client";

import React, { useEffect } from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref, inView } = useInView({threshold: 0.5});
  const {setActiveSection} = useActiveSectionContext();

    useEffect(() => {
      if (inView) {
        setActiveSection("Home");
      }
    }, [inView, setActiveSection]);
  
    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
        <div className="relative">
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Profile-min.png"
              alt="Canyon portrait"
              quality="95"
              priority={true}
              width="192"
              height="192"
              className="h-42 w-40 rounded-full border-[0.35rem] border-white
              shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.5,
            }}
          >
            👋
          </motion.span>
        </div>
        </div>

        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, I'm Canyon.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> and{" "}
        <span className="font-bold">entering my last semester at USC.</span> I am always looking to meet and learn
        from others and I would love to connect.
      </motion.h1>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
        href="#contact"
        className="group bg-gray-100 text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition ">
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />

        </Link>
            
            <a
                className="group bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition borderBlack dark:bg-gray/10"
                href="/resume.pdf"
                download
                >
                Download Resume{" "}
                <HiDownload className="opacity-60 hover:text-gray-100 group-hover:translate-y-1 transition" />
                </a>

                <a
                className="bg-white p-4 text-gray-100 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-100 active:scale-105 transition cursor-pointer borderWhite dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/canyon-zhang-86231a208/"
                target="_blank"
                >
                <BsLinkedin />
                </a>

                <a
                className="bg-white p-4 text-gray-100 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-100 active:scale-105 transition cursor-pointer borderWhite dark:bg-white/10 dark:text-white/60"
                href="https://github.com/canyonzhang"
                target="_blank"
                >
                <FaGithubSquare />
                </a>
                </motion.div>
            </div>
      </section>
    );
  }
  

