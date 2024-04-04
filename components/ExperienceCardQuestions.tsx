import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type Props = {
  company: string;
};

function ExperienceCardQuestions({ company }: Props) {
  const { ref } = useSectionInView("ExperienceQuestions");

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full sm:w-1/2 px-6 py-8 sm:p-10 bg-light opacity-100 transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      ></motion.div>
      <div className="px-0 md:px-10 text-left">
        <a
          className="text-3xl font-semibold"
          href="https://q16.ai/"
          target="_blank"
        >
          {company}
        </a>
        <p className="uppercase my-4">Fullstack engineer</p>
        <div className="flex space-x-2 space-y-2 my-2 flex-wrap">
          <Image
            width={37}
            height={30}
            src="/logos/logo-react.png"
            alt="Logo React.js"
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
            src="/logos/logo-nodejs.png"
            alt="Logo Node.js"
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
            src="/logos/logo-kotlin.png"
            alt="Logo Kotlin"
          />
          <Image
            width={30}
            height={30}
            src="/logos/logo-swift.png"
            alt="Logo Swift"
          />
        </div>
        <p className="py-5 text-gray-400">2017 - 2021</p>
        <ul className="list-disc space-y-2 ml-1 sm:ml-5 text-sm">
          <li>
            Full-stack implementation of a data-analysis platform used in the
            field of eHealth
          </li>
          <li>Data visualization using PowerBI</li>
          <li>Development for android, iOS and web applications</li>
          <li>
            Testing and continuous deployment for an environment subject to
            sensitive data
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardQuestions;
