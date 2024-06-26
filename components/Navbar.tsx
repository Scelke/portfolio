"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useActiveSectionContext } from "@/context/active-section-context";

type Props = {};

const links = ["About", "Experience", "Skills", "Projects", "Contact"];

function Navbar({}: Props) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const isActiveSection = (element: string) => {
    const activeSect = activeSection.toLowerCase();

    if (activeSect === element.toLowerCase()) return true;
    if (element === "experience") {
      if (
        activeSect === "experiencecubitec" ||
        activeSect === "experiencequestions"
      ) {
        return true;
      }
    }
    if (element === "about") {
      if (activeSect === "aboutimage") return true;
    }
    return false;
  };

  return (
    <header className="fixed h-[90vh] w-[40px] top-[5vh] left-[10px] bg-transparent font-light tracking-wide py-4 z-50">
      <div className="relative h-full py-2 overflow-hidden">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between h-full"
        >
          <Link href="#hero">
            <Image
              width={37}
              height={28}
              src="/logo.png"
              alt="Logo, handwritten elke"
              className="-rotate-90 pb-3"
            />
          </Link>
          <div className="relative flex flex-col gap-2 text-sm">
            {links.map((element) => (
              <Link
                key={element}
                href={`#${element.toLowerCase()}`}
                className={`vertical`}
                onClick={() => {
                  setActiveSection(element.toLowerCase());
                  setTimeOfLastClick(Date.now());
                }}
              >
                {element}

                {isActiveSection(element.toLowerCase()) && (
                  <div className="absolute top-0 bottom-0 left-0 -right-1 h-full w-full bg-light -z-10 rounded-sm"></div>
                )}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <SocialIcon
              url="https://www.linkedin.com/in/elke-s/"
              className="!w-[30px] !h-[30px] -rotate-90"
            />
            <SocialIcon
              url="https://github.com/scelke"
              className="!w-[30px] !h-[30px] -rotate-90"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -750 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-0 top-0 h-full w-[1px] bg-brownish"
        ></motion.div>
      </div>
    </header>
  );
}

export default Navbar;
