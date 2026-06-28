import { Briefcase, Calendar, Laptop, Timer } from "lucide-react";

export const recentActivities = [
  {
    text: "Deployed redesign of personal portfolio web",
    tag: "Web",
    date: "26 June 2026",
    active: true,
  },
  {
    text: "Organized company visit event for GDGoC UIN Jakarta core team",
    tag: "Event",
    date: "23 June 2026",
  },
  {
    text: "Officially joined Pusat Karier UIN Jakarta as Data Specialist Intern",
    tag: "Career",
    date: "31 May 2026",
  },
  {
    text: "Organized Build with AI event — GDGoC UIN Jakarta chapter",
    tag: "Event",
    date: "23 May 2026",
  },
  {
    text: "Deployed first version of personal portfolio web",
    tag: "Web",
    date: "13 May 2026",
  },
];

export const availabilityStatus = {
  label: "Open to opportunities",
};

export const availabilityPreferences = [
  {
    key: "Role",
    value: "Data Analyst · Data Specialist",
    icon: Briefcase,
  },
  {
    key: "Setup",
    value: "Remote · Hybrid · Depok/Jakarta",
    icon: Laptop,
  },
  {
    key: "Type",
    value: "Part-time · Internship · Freelance",
    icon: Timer,
  },
  {
    key: "Start",
    value: "Immediately available",
    icon: Calendar,
  },
];

export const cvDownload = {
  eyebrow: "Resume",
  lastUpdated: "Last updated June 2026",
  fileName: "CV-Luthfi_Herianda_Putra.pdf",
  href: "/CV-Luthfi_Herianda_Putra.pdf",
  label: "CV — Luthfi Herianda Putra",
  subtitle: "PDF · Data Analyst · 1 page",
};
