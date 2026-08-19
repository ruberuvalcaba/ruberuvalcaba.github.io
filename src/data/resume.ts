export const tracks = ["Frontend", "Architecture", "Platform"] as const;
export type Track = (typeof tracks)[number];

export type Role = {
  id: string;
  company: string;
  title: string;
  location?: string;
  period: string;
  years: string;
  tracks: Track[];
  highlights: string[];
  stack: string[];
};

export type Logos = {
  id: string;
  company: string;
  src: string;
};

export const profile = {
  name: "Ruben F. Ruvalcaba",
  role: "Senior Frontend Engineer",
  location: "New York, NY",
  phone: "+1 929 620 7962",
  email: "ruberuvalcaba@gmail.com",
  linkedin: "https://linkedin.com/in/ruberuvalcaba",
  github: "https://github.com/ruberuvalcaba",
  summary:
    "Hi, I'm a Senior Frontend Engineer with 10+ years building enterprise-scale and customer-facing web applications. I improve frontend performance, design scalable frontend architectures, craft reusable component libraries, and ship modern interfaces for products serving millions of users.",
  expertise: "Frontend Engineering | Architecture & Performance | UX Engineering, Design Systems & Component Libraries | Technical Leadership & Mentorship",
};

export const stats = [
  { value: "10+", label: "Years engineering" },
  { value: "100M+", label: "Users reached" },
  { value: "50%", label: "Perf gains delivered" },
  { value: "20+", label: "Production Projects" },
];

export const logos: Logos[] = [
  {
    id: "citi",
    company: "Citigroup",
    src: "/logos/citi.svg.webp",
  },
  {
    id: "wbd",
    company: "Warner Bros. Discovery",
    src: "/logos/wbd.webp",
  },
  {
    id: "epam-sr",
    company: "EPAM Systems",
    src: "/logos/epam.webp",
  },
  {
    id: "tcs",
    company: "TATA Consultancy Services",
    src: "/logos/tcs.svg.webp",
  },
  {
    id: "softtek",
    company: "Softtek",
    src: "/logos/softtek.png",
  },
];

export const roles: Role[] = [
  {
    id: "citi",
    tracks: ["Architecture", "Frontend", "Platform"],
    company: "Citigroup",
    title: "Senior Frontend Engineer",
    location: "New York, NY",
    period: "Oct 2023 — Jun 2026",
    years: "2023",
    highlights: [
      "Accelerated feature delivery by 40% for a team of 20+ engineers by architecting a React + Storybook atomic component library as part of the organization's frontend innovation strategy.",
      "Enhanced frontend performance by 50% and cut page loads from 9s to 2s through large-scale React modernization and state architecture standardization.",
      "Reduced client-side complexity by 20% by defining frontend-driven REST API contracts with backend teams.",
      "Reduced production regressions by 15% by implementing ESLint, Prettier and Vitest quality gates in CI/CD.",
      "Improved platform scalability and stability by 25% by mentoring 10+ engineers through code reviews and architecture guidance.",
      "Led frontend architecture strategy across 5+ large React platforms.",
    ],
    stack: ["React", "TypeScript", "Storybook", "Vitest", "CI/CD"],
  },
  {
    id: "wbd",
    tracks: ["Platform", "Architecture", "Frontend"],
    company: "Warner Bros. Discovery",
    title: "Senior Frontend Engineer",
    period: "May 2019 — Oct 2023",
    years: "2019",
    highlights: [
      "Increased development efficiency by 40% and brand consistency by 90% through a React + TypeScript Storybook design system adopted across 3 major media brands.",
      "Upgraded deployments from 30 min to 7 min by re-architecting the platform into isolated micro-frontends with Module Federation and AWS Amplify, raising deploy success from 22% to ~100%.",
      "Enabled publishing workflows for 8+ global media brands serving 100M+ users via a React + TypeScript CMS integrated with DynamoDB.",
      "Increased user engagement by 25% by modernizing the official 2020 Shark Week websites for Discovery Channel.",
      "Accelerated onboarding for junior engineers through mentorship, documentation and knowledge sharing.",
    ],
    stack: [
      "Micro-frontends",
      "Module Federation",
      "AWS",
      "DynamoDB",
      "Design Systems",
    ],
  },
  {
    id: "epam-sr",
    tracks: ["Architecture", "Frontend"],
    company: "EPAM Systems",
    title: "Senior Software Engineer",
    period: "Jan 2018 — May 2019",
    years: "2018",
    highlights: [
      "Refined maintainability by establishing reusable React component patterns, Redux architecture standards and Jest practices across a 6-engineer team.",
      "Accelerated delivery of scheduling workflows on a React/Node.js flight scheduling platform through cross-functional collaboration.",
      "Increased engineering consistency by 60% and code quality by 50% with frontend architecture standards.",
    ],
    stack: ["React", "Redux", "Node.js", "Jest"],
  },
  {
    id: "epam-swe",
    tracks: ["Frontend"],
    company: "EPAM Systems",
    title: "Software Engineer",
    period: "Nov 2016 — Jan 2018",
    years: "2016",
    highlights: [
      'Earned "Extra Mile" recognition delivering production-ready features for the HomeAway platform using React and unit testing.',
      "Expanded expertise in ES6, Angular 2+, DevOps and automated testing through an intensive Google-led engineering program.",
      "Enhanced cross-team collaboration and Agile delivery through workshops and Toastmasters participation.",
    ],
    stack: ["React", "Angular 2+", "ES6", "DevOps"],
  },
  {
    id: "tcs",
    tracks: ["Frontend"],
    company: "TATA Consultancy Services",
    title: "Frontend Developer",
    period: "Apr 2015 — Nov 2016",
    years: "2015",
    highlights: [
      "Improved page load performance by 20% through CSS refactoring, asset optimization and responsive enhancements for USAA's banking platform.",
      "Enhanced experience for 10M+ users with accessible (WCAG AA) responsive UI components across 3 major browsers.",
      "Modernized mobile-first banking interfaces, improving performance, accessibility and responsiveness.",
    ],
    stack: ["JavaScript", "HTML5/CSS3", "Accessibility", "Responsive"],
  },
  {
    id: "softtek",
    tracks: ["Frontend"],
    company: "Softtek",
    title: "Web Developer",
    period: "Jul 2013 — Apr 2015",
    years: "2013",
    highlights: [
      "Enhanced loading and UI/UX efficiency by 30% by developing a marketing web portal for GE Aviation.",
      "Increased visitor engagement by 20% with the official GE Rio 2016 Olympics promotional website.",
      'Earned GE Aviation\'s "Delivery Excellence" and "Best Creative & Innovative Solution" awards.',
    ],
    stack: ["JavaScript", "CMS", "UI/UX"],
  },
];

export const skillGroups = [
  {
    title: "Frontend & Architecture",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Zustand",
      "TanStack Query",
      "TailwindCSS",
      "GraphQL",
      "Node.js",
      "Design Systems",
      "UI Component Libraries",
      "Storybook",
      "Micro-frontends",
      "Performance Optimization",
      "Vite",
      "Webpack",
      "REST APIs",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "Accessibility (a11y)",
      "Performance Testing",
      "ESLint",
      "A/B Testing",
    ],
  },
  {
    title: "Cloud & Collaboration",
    items: ["AWS", "CI/CD", "Git", "GitHub Copilot", "Figma", "Agile"],
  },
];

export const education = {
  school: "U A A",
  degree: "Bachelor's, Computer Science",
  period: "Aug 2010 — Dec 2014",
};
