export type Logos = {
  id: string;
  company: string;
  src: string;
};

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

export const actionButtons = {
  email: `Let's build something`,
  resume: "Download resume",
  about: "More about me",
  back: "Back to profile",
  currentRole: "See current role",
};
