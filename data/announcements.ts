export interface Announcement {
  title: string;
  description: string;
  date: string; // ISO format date string
  endDate: string; // ISO format date string
}

export const announcements: Announcement[] = [
  {
    title: "Holiday Notice",
    description:
      "Good Thai Restaurant will be closed for holidays from 14th April to 6th May. We will reopen and welcome you back on 7th May. Thank you for your continued support, and we look forward to serving you again soon!",
    date: "2026-03-29",
    endDate: "2026-05-06",
  }
];