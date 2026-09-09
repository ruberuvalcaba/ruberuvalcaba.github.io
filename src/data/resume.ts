export const tracks = [
  "Architecture",
  "Performance",
  "Design Systems",
  "Modernization",
  "Developer Experience",
  "Technical Leadership",
] as const;
export type Track = (typeof tracks)[number];

export type Role = {
  id: string;
  company: string;
  title: string;
  project?: string;
  location?: string;
  period: string;
  years: string;
  tracks: Track[];
  highlights: string[];
  stack: string[];
};

export const profile = {
  name: "Ruben F. Ruvalcaba",
  role: "Senior Frontend Engineer",
  location: "New York, NY",
  email: "ruben.flores.ruvalcaba@gmail.com",
  linkedin: "https://linkedin.com/in/ruberuvalcaba",
  github: "https://github.com/ruberuvalcaba",
  authorization: "U.S. Permanent Resident",
  // "Hi, I'm your next Senior Frontend Engineer. I build scalable, high-performing web applications, reusable component libraries, design systems, and modern interfaces for enterprise and customer-facing products serving millions of users.",
  summary:
    "Hi, I'm Ruben. I build the frontend foundations that help teams ship better products, scalable architecture, high-performance interfaces, and reusable design systems.",
  expertise:
    "Frontend Engineering, Architecture & Performance, UX Engineering, Design Systems & Component Libraries, Technical Leadership & Mentorship",
};

export const stats = [
  { value: "10+", label: "Years engineering" },
  { value: "100M+", label: "Users reached" },
  { value: "50%", label: "Perf gains delivered" },
  { value: "20+", label: "Production Projects" },
];

export const roles: Role[] = [
  {
    id: "citi",
    tracks: [
      "Architecture",
      "Performance",
      "Modernization",
      "Developer Experience",
      "Technical Leadership",
    ],
    company: "Citi",
    title: "Senior Frontend Engineer",
    project: "Enterprise Risk Technology",
    period: "Oct 2023 — Jun 2026",
    years: "2023",
    highlights: [
      "Architected an atomic component library supporting the organization’s frontend innovation strategy.",
      "Launched a system for regulatory capital calculations, reporting, and risk planning.",
      "Standardized UX, frontend patterns, development processes, and code quality.",
      "Led development of a B2B workflow system for market risk limit sign-offs.",
      "Modernized legacy frontends through React migrations.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Storybook",
      "Vite",
      "Vitest",
      "Figma",
      "REST APIs",
      "GraphQL",
      "GitHub Copilot",
    ],
  },
  {
    id: "wbd",
    tracks: [
      "Architecture",
      "Performance",
      "Design Systems",
      "Developer Experience",
    ],
    company: "Warner Bros. Discovery",
    title: "Senior Frontend Engineer",
    project: "Discovery Channel, Food Network and Travel channel",
    period: "May 2019 — Oct 2023",
    years: "2019",
    highlights: [
      "Launched a CMS to support live-streaming classes for Cooking Channel.",
      "Translated Figma designs into an atomic design system used by 8+ brands.",
      "Modernized Discovery Channel's official 2020 Shark Week websites.",
      "Supported the integration and modernization of Scripps Networks Interactive into Discovery Inc.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Storybook",
      "Webpack",
      "Jest",
      "Micro-frontends",
      "Module Federation",
      "AWS",
      "DynamoDB",
      "Agile",
      "Figma",
      "Node.js",
    ], //Not displaying
  },
  {
    id: "epam-sr",
    tracks: [
      "Architecture",
      "Performance",
      "Modernization",
      "Developer Experience",
    ],
    company: "EPAM Systems",
    title: "Senior Software Engineer",
    project: "Travel & Hospitality",
    period: "Nov 2016 — May 2019",
    years: "2016",
    highlights: [
      "Prototyped Altitude Pairing, an aviation workforce management app for kronos.",
      "Contributed to HomeAway's vacation rental marketplace serving 190 countries.",
      "Strengthened software engineering expertise through a Google-led engineering program.",
    ],
    stack: ["React", "Redux", "Node.js", "Jest"], //Not displaying
  },
  {
    id: "tcs",
    tracks: [
      "Performance",
      "Modernization",
      "Developer Experience",
      "Technical Leadership",
    ],
    company: "TATA Consultancy Services",
    title: "Frontend Developer",
    project: "Banking & Insurance",
    period: "Apr 2015 — Nov 2016",
    years: "2015",
    highlights: [
      "Improved accessibility and responsiveness across USAA's banking platforms.",
      "Built WCAG AA-compliant UI for 10M+ users.",
      "Modernized mobile-first interfaces for performance and usability.",
    ],
    stack: ["JavaScript", "HTML5/CSS3", "Accessibility", "Responsive"], //Not displaying
  },
  {
    id: "softtek",
    tracks: ["Performance", "Modernization", "Developer Experience"],
    company: "Softtek",
    title: "Web Developer",
    project: "General Electric Aviation & Rio 2016 Olympics",
    period: "Jul 2013 — Apr 2015",
    years: "2013",
    highlights: [
      "Developed GE's official Rio 2016 Olympics promotional website.",
      "Contributed to GE Aviation's B2B workflows for supply chain and manufacturing.",
    ],
    stack: ["JavaScript", "CMS", "UI/UX"], //Not displaying
  },
];

export const skillGroups = [
  {
    title: "Frontend & Architecture",
    items: [
      {
        name: "React",
        src: "https://cdn.simpleicons.org/react/000000?size=14",
      },
      {
        name: "TypeScript",
        src: "https://cdn.simpleicons.org/typescript/000000?size=14",
      },
      {
        name: "JavaScript (ES6+)",
        src: "https://cdn.simpleicons.org/javascript/000000?size=14",
      },
      {
        name: "Redux",
        src: "https://cdn.simpleicons.org/redux/000000?size=14",
      },
      { name: "Zustand" },
      {
        name: "TanStack Query",
        src: "https://cdn.simpleicons.org/tanstack/000000?size=14",
      },
      {
        name: "Tailwind CSS",
        src: "https://cdn.simpleicons.org/tailwindcss/000000?size=14",
      },
      {
        name: "GraphQL",
        src: "https://cdn.simpleicons.org/graphql/000000?size=14",
      },
      { name: "REST APIs" },
      {
        name: "Node.js",
        src: "https://cdn.simpleicons.org/node.js/000000?size=14",
      },
      {
        name: "Storybook",
        src: "https://cdn.simpleicons.org/storybook/000000?size=14",
      },
      { name: "Vite", src: "https://cdn.simpleicons.org/vite/000000?size=14" },
      {
        name: "Webpack",
        src: "https://cdn.simpleicons.org/webpack/000000?size=14",
      },
      {
        name: "HTML5",
        src: "https://cdn.simpleicons.org/html5/000000?size=14",
      },
      { name: "CSS3", src: "https://cdn.simpleicons.org/css/000000?size=14" },
      {
        name: "PostgreSQL",
        src: "https://cdn.simpleicons.org/postgresql/000000?size=14",
      },
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      { name: "Jest", src: "https://cdn.simpleicons.org/jest/000000?size=14" },
      {
        name: "Vitest",
        src: "https://cdn.simpleicons.org/vitest/000000?size=14",
      },
      {
        name: "React Testing Library",
        src: "https://cdn.simpleicons.org/testinglibrary/000000?size=14",
      },
      { name: "Accessibility (a11y)" },
      { name: "Performance Testing" },
      {
        name: "ESLint",
        src: "https://cdn.simpleicons.org/eslint/000000?size=14",
      },
      {
        name: "Prettier",
        src: "https://cdn.simpleicons.org/prettier/000000?size=14",
      },
      { name: "A/B Testing" },
    ],
  },
  {
    title: "Cloud & Collaboration",
    items: [
      { name: "AWS" },
      { name: "Git", src: "https://cdn.simpleicons.org/git/000000?size=14" },
      {
        name: "GitHub",
        src: "https://cdn.simpleicons.org/github/000000?size=14",
      },
      {
        name: "GitHub Actions",
        src: "https://cdn.simpleicons.org/githubactions/000000?size=14",
      },
      {
        name: "GitHub Copilot",
        src: "https://cdn.simpleicons.org/githubcopilot/000000?size=14",
      },
      {
        name: "Jenkins",
        src: "https://cdn.simpleicons.org/jenkins/000000?size=14",
      },
      {
        name: "Figma",
        src: "https://cdn.simpleicons.org/figma/000000?size=14",
      },
      {
        name: "Figma",
        src: "https://cdn.simpleicons.org/figma/000000?size=14",
      },
      { name: "Agile" },
    ],
  },
];

export const education = [
  {
    school: "U A A",
    degree: "Bachelor's, Computer Science",
    period: "Aug 2010 — Dec 2014",
  },
  {
    school: "CAAV University of Audiovisual Media",
    degree: "Certificate in Short Film Production & Street Photography",
    period: "2017 — 2019",
  },
  {
    school: "The Art Students League of New York",
    degree: "Oil and Acrylic Painting",
    period: "2022 — current",
  },
];
