import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    name: "Abdulsalam Ghaleb",
    title: "Full Stack Developer",
    about: `Results-driven Full Stack Developer with 2+ years of experience delivering successful cross-sector technology projects across Saudi Arabia and Malaysia. Skilled in the complete software development lifecycle, from conception and design to deployment and maintenance of web and mobile applications. Passionate about leveraging a broad technical skill set to build innovative, efficient, and user-centric solutions.`,

    socials: [
      {
        name: "Email",
        url: "mailto:abdulsalam.s.ghaleb@gmail.com",
        class: "btn-primary",
      },
      {
        name: "GitHub",
        url: "https://github.com/abdulsalam-s-ghaleb",
        class: "btn-secondary",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/salam-ghaleb",
        class: "btn-accent",
      },
      {
        name: "Freelance",
        url: "https://koprey.kayat.site/",
        class: "btn-success",
      },
    ],

    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Technical Certifications", value: "12+" },
      { label: "Honors & Awards", value: "2" },
    ],

    experiences: [
      {
        role: "Full Stack Engineer",
        company: "Koprey",
        years: "01/2025 - Present",
        location: "Jeddah, Saudi Arabia",
        desc: "Developed and maintained a full-stack web platform, focusing on responsive user experiences and core application functionality. Designed and developed responsive web interfaces using modern web technologies. Implemented frontend functionality and interactive user experiences. Developed and integrated backend functionality and APIs. Managed databases and server-side services to manage application data. Optimized website performance, responsiveness, and usability. Troubleshooted and resolved technical issues throughout development and deployment. Independently managed website development, testing, and deployment.",
        stack: [
          "SvelteKit",
          "Next.js",
          "Appwrite",
          "NoSQL",
          "SQL",
          "REST APIs",
          "CI/CD",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "Othouba Line",
        years: "03/2024 - 03/2025",
        location: "Jeddah, Saudi Arabia",
        desc: "Architected responsive, SEO-optimized web apps with React/Next.js and developed RESTful APIs with Appwrite for authentication, real-time data, and storage.",
        stack: ["React", "Next.js", "Appwrite", "NoSQL", "REST APIs", "CI/CD"],
      },
      {
        role: "Full Stack Developer",
        company: "Freelance",
        years: "12/2022 - Present",
        location: "Remote",
        desc: "Developed and maintained a variety of cross-platform web and mobile applications for clients using frameworks like Flutter, Django, Next.js, and Nuxt.js.",
        stack: [
          "Flutter",
          "Django",
          "Next.js",
          "Nuxt.js",
          "Svelte",
          "React Native",
          "SQL",
          "NoSQL",
        ],
      },
      {
        role: "Web Scraping / Software Developer",
        company: "Fresh Futures Australia PTY LTD",
        years: "06/2022 - 09/2022",
        location: "Remote",
        desc: "Developed sophisticated web scraping and automation tools using Python, increasing data processing efficiency by up to 10x with multiprocessing.",
        stack: ["Python", "BeautifulSoup", "Selenium", "Dropbox API"],
      },
    ],

    skills: [
      "Next.js + React",
      "Nuxt.js + Vue.js",
      "Svelte",
      "Flutter + Dart",
      "Python + Django",
      "TypeScript / JavaScript",
      "Node.js",
      "NoSQL (Appwrite, Firebase)",
      "SQL (MySQL, PostgreSQL)",
      "Docker",
      "Git",
      "Agile Methodologies",
    ],

    projects: [
      {
        name: "Recipify",
        desc: "A full-stack recipe management platform with SSR, advanced search, and user-generated content.",
        stack: ["Vue.js", "Nuxt.js", "Appwrite", "Tailwind CSS"],
        link: "https://recipify.pages.dev/",
      },
      {
        name: "GPTMana",
        desc: "A cross-platform AI-powered chat assistant for Android, iOS, and the Web.",
        stack: ["Flutter", "Dart", "Provider", "GetX", "REST APIs"],
        link: "/GPTMana.png",
      },
      {
        name: "AI E-Commerce System",
        desc: "E-commerce site allowing product search via text or image using AI object recognition.",
        stack: ["Python", "Django", "TensorFlow", "OpenCV"],
        link: "https://github.com/abdulsalam-s-ghaleb/Web-Based-Application-E-Commerce-system-with-object-recognition-using-Neural-Network-AI",
      },
    ],
  };
};
