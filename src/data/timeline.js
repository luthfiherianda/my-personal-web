export const milestones = [
  {
    year: "2021-2024",
    title: "SMAS Al-Hasra Depok",
    subtitle: "Natural Science Major",
    type: "education",
  },
  {
    year: "2021-2022",
    title: "Staff of Religious Division",
    subtitle: "OSIS SMAS Al-Hasra",
    type: "organization",
  },
  {
    year: "2022–2023",
    title: "General Secretary",
    subtitle: "OSIS & Pramuka SMAS Al-Hasra",
    type: "organization",
  },
  {
    year: "2024-Present",
    title: "UIN Syarif Hidayatullah Jakarta",
    subtitle: "Information Systems",
    type: "education",
  },
  {
    year: "2025–Present",
    title: "Head of Event Division",
    subtitle: "GDGoC UIN Jakarta",
    type: "active",
  },
  {
    year: "2026-Present",
    title: "Data Specialist Intern",
    subtitle: "Pusat Karier UIN Jakarta",
    type: "active",
  },
];

export const timelineDotSize = "h-2.5 w-2.5";

export const timelineTypeConfig = {
  education: {
    label: "Education",
    dot: "bg-timeline-education ring-timeline-education/25",
    dotBg: "bg-timeline-education",
    badge:
      "border-timeline-education/30 bg-timeline-education/10 text-timeline-education",
    dotSize: timelineDotSize,
  },
  organization: {
    label: "Organization",
    dot: "bg-timeline-organization ring-timeline-organization/25",
    dotBg: "bg-timeline-organization",
    badge:
      "border-timeline-organization/40 bg-timeline-organization/10 text-timeline-organization",
    dotSize: timelineDotSize,
  },
  active: {
    label: "Active",
    dot: "bg-timeline-active ring-timeline-active/30",
    dotBg: "bg-timeline-active",
    badge: "border-timeline-active/35 bg-timeline-active/10 text-timeline-active",
    dotSize: timelineDotSize,
  },
};
