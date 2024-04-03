import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  company: string;
};

function ExperienceCardCubitec({ company }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full sm:w-1/2 snap-center p-10 bg-light opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      ></motion.div>
      <div className="px-0 md:px-10 text-left">
        <a
          className="text-3xl font-semibold"
          href="https://www.cubitec.be/"
          target="_blank"
        >
          {company}
        </a>
        <p className="uppercase my-4">Fullstack engineer</p>
        <div className="flex space-x-2 my-2">
          <Image
            width={30}
            height={30}
            src="/logos/logo-vue.png"
            alt="Logo javascript"
          />
          <Image
            width={30}
            height={30}
            src="/logos/logo-js.png"
            alt="Logo javascript"
          />
          <Image
            width={30}
            height={30}
            src="/logos/logo-html.svg"
            alt="Logo html"
          />
          <Image
            width={30}
            height={30}
            src="/logos/logo-css.svg"
            alt="Logo css"
          />
          <Image
            width={30}
            height={30}
            src="/logos/logo-postgress.png"
            alt="Logo postgreSQL"
          />
          <Image
            width={30}
            height={30}
            src="/logos/logo-rest.png"
            alt="Logo Restful API"
          />
        </div>
        <p className="py-5 text-gray-400">2021 - 2024</p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          <li>
            Using a CMS to transform wireframes into beautiful digital products
          </li>
          <li>
            Technical project architecture, including database design,
            scalability and performance.
          </li>
          <li>Extend the component library by writing components in Vue.js</li>
          <li>Make integrations based on RESTful APIs</li>
          <li>
            Engage in direct client communication to understand their
            requirements
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardCubitec;
