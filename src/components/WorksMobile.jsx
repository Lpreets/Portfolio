import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projectseasy, projectsmiddle, projectshard } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {

  return (
    <div
    onClick={() => window.open(source_code_link, "_blank")}
    >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3
            className="text-white font-bold text-[24px] cursor-pointer"
          >
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </div>

      <div className="w-full flex">
        <p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are the projects I&apos;ve worked on. They range from simple React
          websites to Full-Stack applications that utilize different
          technologies and frameworks. <br />
          By challenging myself to work with different technologies, I&apos;ve been
          able to learn a lot and improve my skills. <br />
          The projects also utilize different types of Databases that have
          helped expand my knowledge of SQL and NoSQL databases. <br />
          Each project is on GitHub but also deployed for viewing on Vercel or
          other hosting platforms. <br />
          I&apos;m always looking for new opportunities to learn and grow as a
          developer, so if you have any ideas or projects you&apos;d like to
          collaborate on, please feel free to contact me.
        </p>
      </div>
      <h3 className={`${styles.sectionProjectText} mt-8 text-center`}>Difficulty: Hard</h3>
      <div className="mt-10 flex flex-wrap gap-7">
        {projectshard.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <h3 className={`${styles.sectionProjectText} mt-8 text-center`}>Difficulty: Middle</h3>
      <div className="mt-10 flex flex-wrap gap-7">
        {projectsmiddle.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <h3 className={`${styles.sectionProjectText} mt-8 text-center`}>Difficulty: Easy</h3>
      <div className="mt-10 flex flex-wrap gap-7">
        {projectseasy.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
