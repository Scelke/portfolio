"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Project from "./Project";
import Skill from "./Skill";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

function Projects({}: Props) {
  const { ref } = useSectionInView("Projects");

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen py-24 flex text-center mx-auto flex-col overflow-hidden max-w-7xl pl-[70px] pr-[40px]"
      >
        <h3 className="uppercase tracking-[20px] text-2xl">Recent projects</h3>

        <div className="flex items-center justify-between grow">
          <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-3">
            <Project
              description="Including multi language, complex forms, custom domain and email setup, animations, SEO and responsive design"
              logo="/projects/BKP.png"
              name="BKP-Cargo"
              link="https://www.bkp-cargo.com/"
            />
            <Project
              description="Including an Instagram integration, cms, animations, forms and responsive design"
              logo="/projects/BMA.png"
              name="BMA"
              link=""
            />
            <Project
              description="Including Issuu integration, cms, responsive design and SEO"
              logo="/projects/Eurostock.png"
              name="Eurostock"
              link="https://www.eurostock-westmalle.be/"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
