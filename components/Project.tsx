import Image from "next/image";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type Props = {
  name: string;
  link?: string;
  description: string;
  logo: string;
  techStack: {
    src: string;
    name: string;
  }[];
};

function Project({ name, link, description, logo, techStack }: Props) {
  return (
    <>
      {link && (
        <a className="overflow-hidden group" href={link} target="_blank">
          <ProjectInfo
            name={name}
            link={link}
            description={description}
            logo={logo}
            techStack={techStack}
          />
        </a>
      )}
      {!link && (
        <div className="overflow-hidden group">
          <ProjectInfo
            name={name}
            description={description}
            logo={logo}
            techStack={techStack}
          />
        </div>
      )}
    </>
  );
}

function ProjectInfo({ name, link, description, logo, techStack }: Props) {
  return (
    <div className="relative flex flex-col text-center p-8 pb-2 gap-6 transform group-hover:translate-x-full duration-700 h-full">
      <div className="absolute transform -translate-x-full w-full h-full flex justify-center items-center">
        <div className="flex gap-2 italic">
          {link ? (
            <>
              {name}
              <ArrowUpRightIcon className="w-7 h-7 stroke-1" />
            </>
          ) : (
            "Soon live"
          )}
        </div>
      </div>

      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center gap-4">
          <Image src={logo} alt={`Logo of ${name}`} width={40} height={40} />
          <h3>{name}</h3>
        </div>
        <div className="p-2 pt-7 pb-4 text-sm leading-6">{description}</div>
        <div className="flex gap-2 justify-center mt-auto">
          {techStack.map((element, index) => (
            <Image
              key={index}
              width={22}
              height={22}
              src={element.src}
              alt={`Logo of ${element.name}`}
              className="w-[22px] h-[22px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
