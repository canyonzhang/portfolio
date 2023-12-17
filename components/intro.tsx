"use client";

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]">
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

      </section>
    );
  }
  

