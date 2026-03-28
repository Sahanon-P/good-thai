export const contact = {
  address: {
    street: "166 Kendal Avenue, Burnside",
    city: "Christchurch, New Zealand 8053",
  },
  phone: {
    display: "(03) 9123 4567",
    href: "tel:+6439123456",
  },
  email: {
    display: "goodthaibp@gmail.com",
    href: "mailto:goodthaibp@gmail.com",
  },
  mapEmbedSrc:
    "https://maps.google.com/maps?q=-43.5004694,172.5642989&z=16&output=embed",
};

export interface HourEntry {
  day: string;
  time: string;
}

export const hours: HourEntry[] = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11:00 am – 2:00 pm, 5:00 pm – 9:00 pm" },
  { day: "Wednesday", time: "11:00 am – 2:00 pm, 5:00 pm – 9:00 pm" },
  { day: "Thursday", time: "11:00 am – 2:00 pm, 5:00 pm – 9:00 pm" },
  { day: "Friday", time: "11:00 am – 2:00 pm, 5:00 pm – 9:00 pm" },
  { day: "Saturday", time: "11:00 am – 2:00 pm, 5:00 pm – 9:00 pm" },
  { day: "Sunday", time: "11:00 am – 2:00 pm, 5:00 pm – 9:00 pm" },
];

export const contactSection = {
  eyebrow: "Find Us",
  heading: "Contact & Hours",
  hoursHeading: "Opening Hours",
};
