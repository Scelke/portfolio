"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

function Hero({}: Props) {
  const { ref } = useSectionInView("Hero");

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-hero bg-cover bg-center pl-[70px] pr-[40px]"
    >
      {/* <BackgroundCircles /> */}
      <section className="z-20 snap-start" id="hero">
        <h2 className="font-seasons text-3xl lg:text-5xl pb-2 font-light">
          The portfolio of
        </h2>
        <h2 className="font-seasons text-4xl lg:text-6xl pb-14">
          Elke Schoenmaekers
        </h2>

        <h1 className="pt-1 m-auto px-10 uppercase tracking-[5px] md:tracking-[10px] h-12">
          <span className="font-light">
            <Typewriter
              words={[
                "Fullstack developer",
                "Welcome in my digital world",
                "React | Next.js | Node.js | postgreSQL",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <Link
          href="#contact"
          className="absolute top-6 right-6 md:top-8 md:right-10 flex flex-col tracking-wider text-left"
        >
          <div className="flex gap-2 pb-1">
            Contact Me
            <ArrowUpRightIcon className="w-5 h-5 stroke-1" />
          </div>
          <div className="text-sm font-light leading-4	">
            To get more info
            <br />
            or have a chat
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Hero;
