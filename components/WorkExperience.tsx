"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCardCubitec from "./ExperienceCardCubitec";
import ExperienceCardQuestions from "./ExperienceCardQuestions";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

function WorkExperience({}: Props) {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen py-24 flex text-center mx-auto flex-col overflow-hidden max-w-7xl pl-[70px] pr-[20px] sm:pr-[40px]"
    >
      <h3 className="uppercase tracking-[10px] text-xl md:text-2xl md:tracking-[20px] pb-10">
        Experience
      </h3>
      <div className="w-full flex flex-col gap-5 md:flex-row space-between pl-2 md:p-10">
        <ExperienceCardCubitec company="Cubitec" />
        <ExperienceCardQuestions company="Q16.ai" />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
