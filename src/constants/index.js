import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    aspnet,
    csharp,
    django,
    mysql,
    python,
    nextjs,
    sql,
    github, 
    facebook,
    linkedin,
    x,
    resume,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Responsive Design",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer",
      icon: backend,
    },
    {
      title: "Databases",
      icon: backend,
    },
    {
      title: "RESTful APIs",
      icon: mobile,
    },
    {
      title: "AI / ML",
      icon: web,
    },
    {
      title: "Blockchain",
      icon: web,
    },
    {
      title: "Accessibility & Inclusive Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "ASP.NET",
      icon: aspnet,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: "",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: "",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: "",
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: "",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Threads Clone",
      description:
      "Create Threads, join communities, see other people! Created with Next.js 13.4. The database of choice is MongoDB. Clerk is used for Authentication handling. File Uploads with UploadThing. Layout has been created with Tailwind CSS and beautiful styled componenets from Shadcn!",
      tags: [
        {
          name: "Next.js 13.4",
          color: "black-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "light-green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "light-blue-text-gradient",
        },
      ],
      image: portfolio1,
      source_code_link: "https://lpreet-threads-clone.vercel.app/",
    },
    {
      name: "DALL-E Clone",
      description:
      "Browse through a collection of imaginative and visually stunning images generated by DALL-E AI. Created with Vite and React. Database of choise is MongoDB. Utilizes OpenAI API DALL-E to create images from prompts. HTTP is handled with Express and API with Axios. Styled with TailwindCSS.",
      tags: [
        {
          name: "Vite",
          color: "yellow-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "yellow-text-gradient",
        },
        {
          name: "Axios",
          color: "purple-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "light-blue-text-gradient",
        },
      ],
      image: portfolio2,
      source_code_link: "https://lpreet-dalle-e-clone.netlify.app/",
    },
    {
      name: "Threejs",
      description:
      "Create your unique and exclusive shirt with 3D customization tool. Unleash your imagination! Created with Vite and React. Utilizes OpenAI API DALL-E to create images or colors from prompts. Styled with TailwindCSS and uses Threejs library for 3D rendering.",
      tags: [
        {
          name: "Vite",
          color: "yellow-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "light-blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "black-text-gradient",
        },
      ],
      image: portfolio3,
      source_code_link: "https://lpreet-threejs.netlify.app/",
    },
    {
      name: "Meta Front-End Developer",
      description:
      "Final capstone project for Meta Front-End Developer Professional Certificate. Project is setup up with React and Version Control with Git. Features semantic HTML, Meta OG tags, and a booking system with form validation.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio4,
      source_code_link: "https://lpreet-meta-frontendcapstone.vercel.app/",
    },
    {
      name: "Meta Back-End Developer",
      description:
      "Final capstone project for Meta Back-End Developer Profesional Certificate. Project is set up with Django and Version Control with Git. Project is set up with MySQL server. Different API endpoints made and also user Registration, Authorization and Authentication  is set up with DjangoRestFramework.",
      tags: [
        {
          name: "Python",
          color: "yellowtoblue-text-gradient",
        },
        {
          name: "Django",
          color: "greentowhite-text-gradient",
        },
        {
          name: "DRF",
          color: "greentowhite-text-gradient",
        },
        {
          name: "MySQL",
          color: "orangetoblue-text-gradient",
        },
      ],
      image: portfolio5,
      source_code_link: "https://lpreet.pythonanywhere.com",
    },
    {
      name: "MovieWorld",
      description:
      "A fun project that made in React that utilizes the MovieDB API. Project was mainly made to practice useState, useEffect and Fetching in React. The project utilizes Tailwind CSS for styling. The project is responsive and has a dark mode. The project is deployed with Vercel.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio6,
      source_code_link: "https://lpreet-movieworld.vercel.app",
    },
  ];
  
  export const footerlinks = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/Lpreets/",
      icon: facebook,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/lpreet/",
      icon: linkedin,
    },
    {
      name: "Resume",
      link: resume,
      icon: "CV",
    },
    {
      name: "Github",
      link: "https://github.com/Lpreets",
      icon: github,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Lpreetsh",
      icon: x,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };