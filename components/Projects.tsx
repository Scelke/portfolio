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
        className="min-h-screen py-24 flex text-center mx-auto flex-col overflow-hidden max-w-7xl pl-[70px] pr-[20px] sm:pr-[40px]"
      >
        <h3 className="uppercase tracking-[10px] text-xl md:text-2xl md:tracking-[20px] pb-10">
          Recent projects
        </h3>
        <div className="flex items-center justify-between grow">
          <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-3">
            <Project
              description="Fun blog in masonry style. Including MongoDB, Prisma database queries, Next.js framework, Tailwind and Framer Motion"
              logo="/projects/Masonry.png"
              name="Masonry Blog"
              link="http://www.elkesmusthaves.com/"
              techStack={[
                { src: "/logos/logo-mongo.svg", name: "MongoDB" },
                { src: "/logos/logo-prisma.png", name: "Prisma" },
                { src: "/logos/logo-next.svg", name: "Nex.js" },
                { src: "/logos/logo-tailwind.png", name: "Tailwind" },
                { src: "/logos/logo-framermotion.svg", name: "Framer motion" },
              ]}
            />
            <Project
              description="Including multi language, complex forms, custom domain and email setup, animations, SEO and responsive design"
              logo="/projects/BKP.png"
              name="BKP-Cargo"
              link="https://www.bkp-cargo.com/"
              techStack={[
                { src: "/logos/logo-webflow.png", name: "Webflow" },
                { src: "/logos/logo-js.png", name: "Javascript" },
                { src: "/logos/logo-css.svg", name: "Css" },
                { src: "/logos/logo-html.svg", name: "html" },
              ]}
            />
            {/* <Project
              description="Including an Instagram integration, cms, animations, forms and responsive design"
              logo="/projects/BMA.png"
              name="BMA"
              link=""
              techStack={[
                { src: "/logos/logo-webflow.png", name: "Webflow" },
                { src: "/logos/logo-js.png", name: "Javascript" },
                { src: "/logos/logo-css.svg", name: "Css" },
                { src: "/logos/logo-html.svg", name: "html" },
              ]}
            /> */}
            <Project
              description="Including Issuu integration, cms, responsive design and SEO"
              logo="/projects/Eurostock.png"
              name="Eurostock"
              link="https://www.eurostock-westmalle.be/"
              techStack={[
                { src: "/logos/logo-webflow.png", name: "Webflow" },
                { src: "/logos/logo-js.png", name: "Javascript" },
                { src: "/logos/logo-css.svg", name: "Css" },
                { src: "/logos/logo-html.svg", name: "html" },
              ]}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
