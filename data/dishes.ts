export interface Dish {
  name: string;
  description: string;
  price: string;
  image: { src: string; alt: string };
}

export const dishes: Dish[] = [
  {
    name: "Pad Thai Goong",
    description:
      "Stir-fried rice noodles with fresh tiger prawns, egg, bean sprouts, and roasted peanuts in our signature tamarind sauce.",
    price: "$24",
    image: { src: "https://picsum.photos/seed/pad-thai/400/300", alt: "Pad Thai Goong" },
  },
  {
    name: "Massaman Lamb",
    description:
      "Slow-braised lamb shoulder in rich massaman curry paste with coconut milk, potatoes, and toasted cashews.",
    price: "$28",
    image: { src: "https://picsum.photos/seed/massaman/400/300", alt: "Massaman Lamb Curry" },
  },
  {
    name: "Tom Yum Talay",
    description:
      "Aromatic hot and sour seafood soup with lemongrass, kaffir lime, galangal, and fresh gulf seafood.",
    price: "$22",
    image: { src: "https://picsum.photos/seed/tom-yum/400/300", alt: "Tom Yum Talay" },
  },
];

export const featuredSection = {
  eyebrow: "Our Specialities",
  heading: "Pride Dishes",
};
