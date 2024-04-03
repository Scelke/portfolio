import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type Props = {
  name: string;
  link?: string;
  description: string;
  logo: string;
};

function Project({ name, link, description, logo }: Props) {
  return (
    <>
      {link && (
        <a className="overflow-hidden group" href={link} target="_blank">
          <div className="relative flex flex-col text-center p-8 pb-2 gap-6 transform group-hover:translate-x-full duration-700">
            <div className="absolute transform -translate-x-full w-full h-full flex justify-center items-center">
              <div className="flex gap-2 italic">
                {name}
                <ArrowUpRightIcon className="w-7 h-7 stroke-1" />
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={logo}
                  alt={`Logo of ${name}`}
                  width={40}
                  height={40}
                  className=""
                />
                <h3>{name}</h3>
              </div>
              <div className="p-2 pt-7 text-sm leading-6">{description}</div>
            </div>
          </div>
        </a>
      )}
      {!link && (
        <div className="overflow-hidden group">
          <div className="relative flex flex-col text-center p-8 pb-2 gap-6 transform group-hover:translate-x-full duration-700">
            <div className="absolute transform -translate-x-full w-full h-full flex justify-center items-center">
              <div className="flex gap-2 italic">Soon live</div>
            </div>

            <div className="">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={logo}
                  alt={`Logo of ${name}`}
                  width={40}
                  height={40}
                  className=""
                />
                <h3>{name}</h3>
              </div>
              <div className="p-2 pt-7 text-sm leading-6">{description}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
