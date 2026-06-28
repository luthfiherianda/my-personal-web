import {
  GraduationCap,
  MapPin,
  Target,
  Briefcase,
} from "lucide-react";

export const SITE_TITLE = "◆ Luthfi Herianda's Profile";
export const PROFILE_PHOTO = "/profile-photo.jpg";

export const profilePhotoOverlay = {
  tagline: "Long Life Learner",
  name: "Luthfi Herianda Putra",
};

export const profileDetails = [
  {
    label: "EDUCATION",
    items: [
      "Information Systems Major",
      "UIN Syarif Hidayatullah Jakarta",
      "2024–Present (4th Semester)",
    ],
    Icon: GraduationCap,
  },
  {
    label: "LOCATION",
    items: ["Depok, West Java, Indonesia"],
    Icon: MapPin,
  },
  {
    label: "FOCUS AREA",
    items: [
      "Team Leadership",
      "Data & Business Analytics",
      "Business Intelligence",
      "Machine Learning",
    ],
    Icon: Target,
  },
  {
    label: "CURRENTLY",
    items: [
      "Data Specialist Intern at Pusat Karier UIN Jakarta",
      "Head of Event Division at Google Developer Group on Campus UIN Jakarta",
    ],
    Icon: Briefcase,
  },
];

export const heroContent = {
  availabilityTag: "AVAILABLE FOR REMOTE/HYBRID WORK",
  title: "Welcome to a Glimpse of",
  titleAccent: "My Profile",
  description:
    "I'm an Information Systems student with a strong interest in Data Analytics and team leadership. I enjoy transforming raw data into meaningful insights through data cleaning, analysis, visualization, and reporting to support data-driven decision-making in team.",
};

export const footerAbout = {
  eyebrow: "A Bit About Me",
  items: [
    { text: "Structured thinker", icon: "brain" },
    { text: "Tech community administrator", icon: "users" },
    { text: "Distance runner", icon: "footprints" },
    { text: "Music to focus", icon: "music" },
    { text: "Podcasts to grow", icon: "podcast" },
    { text: "Data to decide", icon: "chart" },
    {
      text: "Maximizer by nature — every hour has a purpose",
      icon: "gauge",
    },
  ],
};

export const footerLanguages = {
  eyebrow: "Languages",
  items: [
    { language: "Indonesian", level: "Native" },
    { language: "English", level: "Basic" },
  ],
};

export const footerMusic = {
  eyebrow: "On repeat",
  embedUrl:
    "https://open.spotify.com/embed/track/3ZMH2acaAFSthlxqvtBX7M?utm_source=generator&si=828bc8df34774a6d",
  height: 152,
};

export const footerQuotes = {
  eyebrow: "Quote",
  intervalMs: 5000,
  items: [
    {
      text: "In God we trust. All others must bring data.",
      author: "W. Edwards Deming",
    },
    {
      text: "Information is the oil of the 21st century, and analytics is the combustion engine.",
      author: "Peter Sondergaard",
    },
    {
      text: "Data are just summaries of thousands of stories. Tell a few of those stories to help make the data meaningful.",
      author: "Chip Heath & Dan Heath",
    },
    {
      text: "As we look ahead into the next century, leaders will be those who empower others.",
      author: "Bill Gates",
    },
    {
      text: "The number one thing that you have to do as a leader is to bolster the confidence of the people you lead.",
      author: "Satya Nadella",
    },
  ],
};
