"use client";
import { motion } from "framer-motion";
import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

function ContactMe({}: Props) {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen py-24 flex text-center mx-auto flex-col overflow-hidden max-w-7xl pl-[70px] pr-[20px] sm:pr-[40px]"
    >
      <h3 className="uppercase tracking-[10px] text-xl md:text-2xl md:tracking-[20px]">
        Contact me
      </h3>
      <div className="flex flex-col items-center justify-center grow gap-5">
        <div className="flex flex-col items-center gap-3">
          <div>Elke Schoenmaekers</div>
          <a href="mailto: elkeschoenmaeker@hotmail.com">
            elkeschoenmaeker@hotmail.com
          </a>
          <a href="tel:+32478709129">+324 78 70 91 29</a>
          <p>
            or find me on{" "}
            <a href="https://www.linkedin.com/in/elke-s/">Linkedin</a>
          </p>
          <div className="pt-5">
            <a
              className="flex gap-2 hero-button items-center"
              href="/Fullstack developer - Elke Schoenmaekers.pdf"
              download={true}
            >
              Download resume
              <ArrowDownTrayIcon className="w-5 h-5 stroke-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
