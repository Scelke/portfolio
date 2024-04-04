import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  src: string;
  description: string;
};

function Skill({ directionLeft, src, description }: Props) {
  return (
    <div className="group relative flex">
      <motion.div
        className="relative"
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={src}
          alt={`Logo of ${description}`}
          width={64}
          height={64}
          className="w-16 h-16 lg:w-20 lg:h-20 filter group-hover:grayscale transition duration-300 ease-in-out cursor-pointer"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 lg:w-20 lg:h-20 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-700 opacity-100">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
