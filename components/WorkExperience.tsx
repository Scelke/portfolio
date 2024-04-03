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
      className="min-h-screen py-24 flex text-center mx-auto flex-col overflow-hidden max-w-7xl pl-[70px] pr-[40px]"
    >
      <h3 className="uppercase tracking-[20px] text-2xl">Experience</h3>
      <div className="w-full flex space-x-5 space-between overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCardCubitec company="Cubitec" />
        <ExperienceCardQuestions company="Q16.ai" />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
