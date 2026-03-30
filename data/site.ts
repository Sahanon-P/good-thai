export const site = {
  name: "Good Thai",
  url: "https://goodthairestaurant.co.nz", // ← update when domain is confirmed
  tagline: "Authentic Thai cuisine crafted with tradition, passion, and the finest ingredients — in a chic, welcoming environment.",
  meta: {
    title: "Good Thai — Authentic Thai Restaurant in Christchurch",
    description:
      "Good Thai Restaurant in Burnside, Christchurch. Authentic Thai cuisine — dine in or takeaway. Fully licensed & BYO. Open Tue–Sun for lunch & dinner.",
    keywords: [
      "Thai restaurant Christchurch",
      "Thai food Burnside",
      "authentic Thai cuisine NZ",
      "Good Thai Kendal Avenue",
      "Thai takeaway Christchurch",
      "Thai dine in Christchurch",
    ],
  },
};

export const hero = {
  eyebrow: "Welcome to Good Thai",
  heading: "Authentic Thai",
  subheading:
    "The most satisfying Thai food experience — in a chic environment",
  ctas: {
    primary: { label: "View Menu", href: "#menu" },
    secondary: { label: "Book a Table", href: "#contact" },
  },
};

export const about = {
  eyebrow: "Our Story",
  headline: "Dine In & Takeaway",
  headlineAccent: "Fully Licensed / BYO",
  paragraphs: [
    "GOOD THAI Restaurant brings authentic Thai flavours to the heart of Burnside, Christchurch. Located on Kendal Avenue, we serve traditional dishes crafted with fresh ingredients, bold spices, and recipes inspired by Thailand’s rich culinary heritage.",
    "From comforting noodle bowls to vibrant stir-fries and aromatic curries, every dish is made to deliver a balance of flavour, freshness, and authenticity. Whether you're dining in or grabbing takeaway, GOOD THAI offers a warm, casual experience with genuine Thai taste.",
  ],
  stats: [
    { value: "15+", label: "Years of Excellence" },
    { value: "40+", label: "Authentic Dishes" },
    { value: "4.4★", label: "Average Rating" },
  ],
  image: {
    src: "/restaurant.jpeg",
    alt: "Good Thai restaurant interior",
  },
};

export const lunchClub = {
  eyebrow: "",
  heading: "Join the Lunch Club",
  description:
    "Be the first to hear about our weekly lunch specials, seasonal menus, and exclusive member discounts. No spam — just great Thai food, delivered to your inbox.",
  cta: "Join Now",
  successMessage: "Thank you! You're on the list. 🌸",
  inputPlaceholder: "Your email address",
};

export const footer = {
  tagline:
    "Authentic Thai cuisine crafted with tradition, passion, and the finest ingredients — in a chic, welcoming environment.",
  legalNote: "Dine In · Takeaway · Fully Licensed · BYO",
  quickLinks: [
    { label: "Home", href: "/#home" },
    { label: "Menu", href: "/#menu" },
    { label: "About", href: "/#about" },
    { label: "Chefs", href: "/#chefs" },
    { label: "Contact", href: "/#contact" },
    { label: "Book a Table", href: "/#contact" },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/GOODTHAI166/", icon: "facebook" as const },
    { label: "TripAdvisor", href: "https://www.tripadvisor.com/Restaurant_Review-g255118-d6890378-Reviews-Good_Thai_Restaurant-Christchurch_Canterbury_Region_South_Island.html", icon: "tripadvisor" as const },
  ],
};
