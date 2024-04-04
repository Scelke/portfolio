"use client";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCardCubitec";
import Skill from "./Skill";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

function Skills({}: Props) {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen py-24 flex text-center mx-auto flex-col overflow-hidden max-w-7xl pl-[70px] pr-[20px] sm:pr-[40px]"
    >
      <h3 className="uppercase tracking-[10px] text-xl md:text-2xl md:tracking-[20px] pb-10">
        Skills
      </h3>
      <div className="flex items-center justify-center grow">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <Skill
            description="JS"
            src="/logos/logo-js.png"
            directionLeft={true}
          />
          <Skill
            description="Node.js"
            src="/logos/logo-nodejs.png"
            directionLeft={true}
          />
          <Skill
            description="React"
            src="/logos/logo-react.png"
            directionLeft={true}
          />
          <Skill
            description="Typescript"
            src="/logos/logo-typescript.png"
            directionLeft={true}
          />
          <Skill
            description="Tailwind"
            src="/logos/logo-tailwind.png"
            directionLeft={true}
          />
          <Skill
            description="Next.js"
            src="/logos/logo-next.svg"
            directionLeft={true}
          />
          <Skill
            description="PostgreSQL"
            src="/logos/logo-postgress.png"
            directionLeft={true}
          />
          <Skill
            description="CSS"
            src="/logos/logo-css.svg"
            directionLeft={true}
          />
          <Skill
            description="MongoDB"
            src="/logos/logo-mongo.svg"
            directionLeft={false}
          />
          <Skill
            description="Vue.js"
            src="/logos/logo-vue.png"
            directionLeft={false}
          />
          <Skill
            description="Webflow"
            src="/logos/logo-webflow.png"
            directionLeft={false}
          />
          <Skill
            description="Vercel"
            src="/logos/logo-vercel.svg"
            directionLeft={false}
          />
          <Skill
            description="HTML"
            src="/logos/logo-html.svg"
            directionLeft={false}
          />
          <Skill
            description="Prisma.io"
            src="/logos/logo-prisma.png"
            directionLeft={false}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
