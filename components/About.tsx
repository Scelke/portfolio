"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

type Props = {};

function About({}: Props) {
  const { ref } = useSectionInView("About");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen flex relative flex-col text-center md:text-left max-w-7xl pl-[70px] pr-[40px] py-24 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-2xl pb-10">About</h3>

      <div className="flex flex-col md:flex-row justify-evenly mx-auto items-center grow gap-20">
        <div className="md:w-3/5 space-y-10 px-0 md:px-10">
          <h4 className="text-xl md:text-4xl font-light tracking-wide leading-relaxed md:leading-relaxed">
            Hi I am{" "}
            <Image
              className="inline w-[40px] h-[42px] md:w-[56px] md:h-[60px] pb-3 md:pb-4"
              width={56}
              height={60}
              src="/logo.png"
              alt="Logo, handwritten elke"
            />
            <br />A Belgian software engineer with a passion for web development
          </h4>
          <p className="text-sm">
            I&apos;m a fullstack developer with 6 years of experience, I enjoy
            building sites & apps. My core stack is{" "}
            <span className="font-bold">
              React, Next.js, Node.js and postgreSQL.
            </span>{" "}
            I am also familiar with Vue.js, TypeScript, Prisma and MongoDB. I am
            always looking to learn new technologies. <br />
            <br />
            <span className="italic">When I&apos;m not coding</span>, I enjoy
            running volleyball and traveling. I also enjoy learning new things.
            Last year, I took a course on accounting.
          </p>
          <div className="pt-3">
            <a
              className="inline hero-button items-center"
              href="/Fullstack developer - Elke Schoenmaekers.pdf"
              download={true}
            >
              Download resume
              <ArrowDownTrayIcon className="w-5 h-5 stroke-1 inline ml-3" />
            </a>
          </div>
        </div>

        <div className="md:w-2/5">
          <div className="group relative w-40 h-40 md:w-64 md:h-64 xl:w-[400px] xl:h-[400px] flex-shrink-0 bg-light rounded-full">
            <Image
              src="/elke.png"
              alt="Image of Elke"
              fill={true}
              className="rounded-full object-cover md:rounded-large -translate-y-3 group-hover:-translate-y-6 duration-200"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
