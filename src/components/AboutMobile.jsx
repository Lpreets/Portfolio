import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (

    <div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div

        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
);

const AboutMobile = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a Professional Certified Full-Stack Software Engineer by Meta,
        driven by a passion for technology, learning, and development. My
        enthusiasm for technology began early in my life when I built my first
        PC at the age of 13, and since then, I&apos;ve been interested in coding and
        databases. <br />I love working out, playing games and learning new
        things. <br /> I view every day as an opportunity to learn something new
        and grow as a person.
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AboutMobile, "about");
