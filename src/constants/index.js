import {
    mobile,
    backend,
    creator,
    web,
    makronerco,
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
    portfolio7,
    portfolio8,
    portfolio9,
    portfolio10,
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
      id: "work",
      title: "Work",
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
      title: "Full-Stack Developer",
      icon: backend,
    },
    {
      title: "Mobile Responsive Design",
      icon: mobile,
    },
    {
      title: "Databases",
      icon: backend,
    },
    {
      title: "AI / ML",
      icon: web,
    },
    {
      title: "Blockchain",
      icon: web,
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
      title: "Freelance - Full Stack Developer",
      company_name: "Makroner&Co",
      icon: makronerco,
      iconBg: "#383E56",
      date: "October 2023 - Present",
      points: [
        "Had various discussions with the client about the project and the requirements.",
        "Created and presented wireframes and prototypes to the client for approval.",
        "Planned Tech Stack and Architecture for the project.",
        "Implemented responsive design with mobile first approach.",
        "Added Authentication and Autherization with NextAuth and Protected Routes.",
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
  
  const projectseasy = [
    {
      name: "OptimalSpeedSeo",
      description:
      "Website designed and made with mind to optimal loading speed and search engine optimization.",
      tags: [
        {
          name: "Next.js 14.0",
          color: "black-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "light-blue-text-gradient",
        },
      ],
      image: portfolio8,
      source_code_link: "https://lpreet-optimalspeedseo.vercel.app/",
    },
    {
      name: "AnimeMotion",
      description:
      "Website designed in mind for infinite scroll, animation and loading speed. Using data fetching from a anime API website and loads it in nicely designed cards for viewing.",
      tags: [
        {
          name: "Next.js 14.0",
          color: "black-text-gradient",
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
          name: "FramerMotion",
          color: "light-green-text-gradient",
        },
      ],
      image: portfolio9,
      source_code_link: "https://lpreet-animemotion.vercel.app/",
    },
    {
      name: "Next.js Learn",
      description:
      "Interactive course from Next.js to learn the main features of Next.js by building a full-stack web application.",
      tags: [
        {
          name: "Next.js 14.0",
          color: "black-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "light-blue-text-gradient",
        },
      ],
      image: portfolio10,
      source_code_link: "https://lpreet-nextjs-learn.vercel.app/",
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

  const projectsmiddle = [
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
      source_code_link: "https://lpreet-threejs.vercel.app/",
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
      source_code_link: "https://lpreet-dall-e-clone.vercel.app/",
    },
    {
      name: "PriceWise",
      description:
      "Website made in mind for Web Scraping from Amazon. Tracks prices from Amazon and sends email with updates to the product if opted for. Also uses CRON jobs to periodically update the data automatically.",
      tags: [
        {
          name: "Next.js 14",
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
      image: portfolio7,
      source_code_link: "https://lpreet-pricewise.vercel.app/",
    },
   
  ];

  const projectshard = [
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
  
  export { services, technologies, experiences, testimonials, projectseasy, projectsmiddle, projectshard };