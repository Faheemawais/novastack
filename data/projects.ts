export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  date: string;
  duration: string;
  price: string;
  platform: string;
  liveUrl?: string;
}

export const projects: Project[] = [
    {
    id: 3,
    title: "Vaultbreak",
    subtitle: "Outwit the Warden, vault by vault.",
    description:
      "An AI-powered puzzle game where an AI game master, the Warden, reacts to every choice. Players crack riddle-locked vaults, choosing safe picks or riskier bigger payouts while tracking score, streak and stage progress with instant pulse feedback.",
    tags: ["Flutter", "Firebase", "AI", "Game Design"],
    image: "/projects/vaultbreak.png",
    date: "Oct 2026",
    duration: "2–4 Weeks",
    price: "$600–$1000",
    platform: "iOS & Android",
  },
  {
    id: 4,
    title: "Vitara",
    subtitle: "Understand your symptoms with confidence.",
    description:
      "A clean, trustworthy medical app with a guided symptom check, an AI health chat assistant, medication info, saved assessment history and clear emergency-care guidance. Secure login and a white, light-blue and teal design.",
    tags: ["Flutter", "Firebase", "AI", "Healthcare"],
    image: "/projects/vitara.png",
    date: "Oct 2026",
    duration: "1–2 Months",
    price: "$1200–$1800",
    platform: "iOS & Android",
  },
  {
    id: 5,
    title: "J Cafe",
    subtitle: "Great Taste in Every Cup.",
    description:
      "A food and coffee ordering app with a bold black and yellow theme. Browse popular items and categories, search the menu, manage the cart with promo codes, and check out with a live total.",
    tags: ["Flutter", "Firebase", "UI/UX", "E-commerce"],
    image: "/projects/jcafe.png",
    date: "Sep 2026",
    duration: "3–6 Weeks",
    price: "$800–$1400",
    platform: "iOS & Android",
  },
  {
    id: 6,
    title: "Shopora",
    subtitle: "Better Products. A Brighter You.",
    description:
      "A complete 15-screen e-commerce app kit: splash, onboarding, sign up and login (Google and Apple), home, categories, product list and detail, cart, checkout, account and wishlist, in a clean green and white style.",
    tags: ["Flutter", "Firebase", "Stripe", "E-commerce"],
    image: "/projects/shopora.png",
    date: "Aug 2026",
    duration: "1–2 Months",
    price: "$1500–$2500",
    platform: "iOS & Android",
  },
  {
    id: 7,
    title: "Bookly",
    subtitle: "Clean, modern Amazon Books-inspired design.",
    description:
      "A blue and white bookstore app design covering Home, Categories, Listing, Cart and Checkout. Includes featured books, genre browsing and search, delivered as a Figma file with unlimited revisions.",
    tags: ["Figma", "UI/UX", "Mobile Design", "E-commerce"],
    image: "/projects/bookly.png",
    date: "Jul 2026",
    duration: "4 Days",
    price: "$55–$150",
    platform: "iOS & Android",
  },
  {
    id: 8,
    title: "MediQuick",
    subtitle: "Your Health, Our Priority.",
    description:
      "A medical store app with a customer app and admin panel. Users can search and filter medicines, order with cash on delivery, track orders in real time, call the rider, and receive notifications.",
    tags: ["FlutterFlow", "Firebase", "Admin Panel", "E-commerce"],
    image: "/projects/mediquick.png",
    date: "Jun 2026",
    duration: "1–2 Months",
    price: "$1200–$2000",
    platform: "iOS & Android",
  },
  {
    id: 9,
    title: "Nova",
    subtitle: "Your AI Companion.",
    description:
      "A complete 12-screen AI chat app interface: splash, onboarding, login, sign up, password reset, home, AI chat with typing and error states, chat history with an empty state, profile and settings. Dark pink gradient design.",
    tags: ["FlutterFlow", "Firebase", "AI API", "UI/UX"],
    image: "/projects/nova.png",
    date: "May 2026",
    duration: "1–2 Months",
    price: "$1000–$1800",
    platform: "iOS & Android",
  },
    {
    id: 10,
    title: "Amora",
    subtitle: "Meet people who actually fit.",
    description:
      "An AI-powered dating app with an AI matchmaker that learns your taste, a compatibility quiz, smart icebreakers, an AI date planner, video calls and built-in safety tools. A 28-screen case study covering onboarding, profile setup, discovery, matches, chat, filters, premium plans and a safety center.",
    tags: ["Flutter", "Firebase", "AI", "Video Calls"],
    image: "/projects/amora.png",
    date: "Oct 2026",
    duration: "2–3 Months",
    price: "$2000–$3500",
    platform: "iOS & Android",
  },
  {
    id: 11,
    title: "EduNexus",
    subtitle: "AI-Powered Learning Assistant.",
    description:
      "A learning platform with separate student and teacher portals. Students get an AI study chat, quizzes, summaries, flashcards, a study planner, assignments and study groups. Teachers upload weekly materials, create assignments with AI help limits and track subjects. A 32-screen case study built as a final year project.",
    tags: ["Flutter", "Firebase", "AI", "EdTech"],
    image: "/projects/edunexus.png",
    date: "Feb 2026",
    duration: "2–4 Months",
    price: "$2000–$3500",
    platform: "iOS & Android",
  },
];
// ✅ To add a new project in future:
// Just copy one object above, change the values,
// add your image to /public/projects/, done.
