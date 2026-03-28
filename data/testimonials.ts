export interface Testimonial {
  quote: string;
  author: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I’d give this place 6 stars if I could. The food was absolutely amazing especially the green curry. I’ve tried green curry at many restaurants, but nothing compares to the one here. Everything tasted fresh, the portions were generous, and the ambiance was warm and cozy, making it feel like you’re dining in a Thai household. The service was great as well. I’ll definitely be coming back soon!",
    author: "Austin Jhaymar Sobremonte",
    stars: 5,
  },
  {
    quote:
      "Dining here was a truly delightful experience. 😋🍴🌟 The flavors of the meal were exquisite 👍😋💯 The restaurant's ambiance offered a warm and inviting escape. 🥰🏡🕯️ Every interaction with the staff was pleasant 😊👏🌟 I recommend this establishment to anyone seeking traditional thai food.💯🎉👍",
    author: "Johny Sharma",
    stars: 5,
  },
  {
    quote: "I really enjoyed my meal (TomYam beef soup) with rice. It was delicious. Atmosphere was cozy and relaxing. Staff were kind. Waiting time was incredibly short and food was freshly made. Highly recommended.",
    author: "Shamim Shadfar",
    stars: 5,
  },
];

export const testimonialsSection = {
  eyebrow: "What Our Guests Say",
  heading: "Guest Stories",
};
