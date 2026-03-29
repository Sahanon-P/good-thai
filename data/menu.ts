export type MealPeriod = "lunch" | "dinner" | "both";

export interface SpiceLevelConfig {
  label: string;
  color: string;
}

export const spiceLevels: Record<number, SpiceLevelConfig> = {
  0: { label: "Not Spicy", color: "#FFFFFF" },
  1: { label: "Mild", color: "#FFC107" },
  2: { label: "Medium", color: "#FF8C00" },
  3: { label: "Hot", color: "#FF4500" },
  4: { label: "Extra Hot", color: "#CC0000" },
};

export type DishType =
  | "starters"
  | "mains"
  | "noodles-rice"
  | "soups"
  | "salads";

export type DietaryTag =
  | "lamb"
  | "duck"
  | "crispy pork"
  | "chicken"
  | "beef"
  | "pork"
  | "seafood"
  | "vegetarian"
  | "gluten-free";

export type SpiceValue = 0 | 1 | 2 | 3 | 4;

export interface PriceTag {
  title: string;
  price: number;
  dinnerPrice?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  /**
   * Base price. Used for display when `priceTag` is absent,
   * and as a sort/filter reference when `priceTag` is present.
   */
  price: number;
  dinnerPrice?: number;
  /**
   * Per-protein / per-option pricing.
   * When set, overrides `price` and `dinnerPrice` in the card display.
   */
  priceTag?: PriceTag[];
  image: string;
  mealPeriod: MealPeriod;
  dishType: DishType;
  tags: DietaryTag[];
  /** [min, max] spice range — both values 0–4 */
  spiceLevel?: [SpiceValue, SpiceValue];
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // ── STARTERS ────────────────────────────────────────────
  {
    id: "1",
    name: "Vegetarian Spring Rolls",
    description: "Deep fried spring rolls",
    price: 8,
    image: "/menu_pic/1.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["vegetarian"],
    spiceLevel: [0, 0],
    isPopular: true,
  },
  {
    id: "2",
    name: "Vegetarian Curry Puffs",
    description: "Deep fried potato & pumpkin in puff pastry",
    price: 8,
    image: "/menu_pic/2.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["vegetarian"],
    spiceLevel: [0, 0],
    isPopular: true,
  },
  {
    id: "3",
    name: "Crispy Squid",
    description: "Deep fried crispy squid",
    price: 8,
    image: "/menu_pic/3.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["seafood"],
    spiceLevel: [0, 0],
  },
  {
    id: "4",
    name: "Chicken Satay",
    description: "With homemade peanut sauce",
    price: 8,
    image: "/menu_pic/4.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["chicken"],
    spiceLevel: [0, 0],
  },
  {
    id: "5",
    name: "Chicken Wings",
    description: "Thai style deep fried chicken wings",
    price: 14,
    image: "/menu_pic/5.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["chicken"],
    spiceLevel: [0, 0],
  },

  {
    id: "6",
    name: "Thai Fish Cakes",
    description: "Blended fish fillet with chilli paste & herbs",
    price: 8,
    dinnerPrice: 12,
    image: "/menu_pic/6.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["seafood"],
    spiceLevel: [0, 0],
    isPopular: true,
  },
  {
    id: "7",
    name: "Kung Yang",
    description: "Grilled butterflied prawns",
    price: 13,
    dinnerPrice: 18,
    image: "/menu_pic/7.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["seafood"],
    spiceLevel: [0, 0],
  },
  {
    id: "8",
    name: "Pork Spare Ribs",
    description: "Chef special pork spare ribs",
    price: 8,
    image: "/menu_pic/8.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["pork"],
    spiceLevel: [0, 0],
  },
  {
    id: "9",
    name: "Money Bag",
    description:
      "Deep fried carrot, corn, potato, pea & mince chicken in pastry",
    price: 8,
    image: "/menu_pic/9.jpeg",
    mealPeriod: "dinner",
    dishType: "starters",
    tags: ["chicken"],
    spiceLevel: [0, 0],
  },

  {
    id: "10",
    name: "Combination Entrees",
    description:
      "Spring rolls (3), Curry puffs (3), Chicken Satays (3), Spare ribs (3)",
    price: 23,
    dinnerPrice: 22,
    image: "/menu_pic/10.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["chicken", "pork", "gluten-free"],
    spiceLevel: [0, 0],
    isPopular: true,
  },
  {
    id: "11",
    name: "Tom Yum Soup",
    description: "Slice onion, tomatoes, mushrooms, coriander, & Thai herbs",
    price: 15,
    priceTag: [
      { title: "Chicken/Beef", price: 15 },
      { title: "Fish fillet/Prawns/Seafood", price: 18 },
    ],
    image: "/menu_pic/11.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["beef", "chicken", "seafood"],
    spiceLevel: [1, 4],
    isPopular: true,
  },
  {
    id: "12",
    name: "Tom Kha Soup",
    description:
      "Slice onion, mushrooms, coriander, & Thai herbs with coconut milk",
    price: 15,
    priceTag: [
      { title: "Chicken/Beef/Pork", price: 15 },
      { title: "Fish fillet/Prawns/Seafood", price: 18 },
    ],
    image: "/menu_pic/12.jpeg",
    mealPeriod: "both",
    dishType: "mains",
    tags: ["pork", "chicken", "beef", "seafood"],
    spiceLevel: [1, 4],
  },
  {
    id: "13",
    name: "Green Curry",
    description: "Bamboo shoots & Vegetable with coconut milk",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/13.jpeg",
    mealPeriod: "both",
    dishType: "mains",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian", "gluten-free"],
  },
  {
    id: "14",
    name: "Red Curry",
    description: "Bamboo shoots & Vegetable with coconut milk",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/14.jpeg",
    mealPeriod: "both",
    dishType: "mains",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian", "gluten-free"],
    spiceLevel: [1, 4],
  },

  {
    id: "15",
    name: "Panang Curry",
    description:
      "Beans, capsicum, kaffir lime leaf, crushed peanut with coconut milk",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    dinnerPrice: 22,
    image: "/menu_pic/15.jpeg",
    mealPeriod: "both",
    dishType: "mains",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian", "gluten-free"],
    spiceLevel: [1, 4],
    isPopular: true,
  },
  {
    id: "16",
    name: "Massamun Curry",
    description: "Potatoes, carrots & cashew nuts with coconut milk",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    dinnerPrice: 21,
    image: "/menu_pic/16.jpeg",
    mealPeriod: "both",
    dishType: "mains",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian", "gluten-free"],
    spiceLevel: [0, 1],
  },
  {
    id: "17",
    name: "Spicy Duck Red Curry",
    description: "Roasted duck, fruits & vegetables with coconut milk",
    price: 28,
    image: "/menu_pic/17.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["duck"],
    spiceLevel: [0, 1],
  },
  {
    id: "18",
    name: "Spicy Crispy Pork Red Curry",
    description: "Crispy pork, fruits & vegetables with coconut milk",
    price: 28,
    image: "/menu_pic/18.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["crispy pork"],
    spiceLevel: [3, 4],
  },

  {
    id: "20",
    name: "Seafood on Hotplate",
    description: "Stir fried seafood Thai style (Pad char Talay)",
    price: 28,
    image: "/menu_pic/20.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["seafood"],
    spiceLevel: [1, 4],
  },
  {
    id: "21",
    name: "Pad Thai",
    description: "Tangy Thai flavor, egg, crushed peanuts & bean sprouts",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/21.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [1, 3],
    isPopular: true,
  },
  {
    id: "22",
    name: "Pad See Ew",
    description: "Stir fried rice noodles with egg & dark soy sauce",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/22.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [1, 3],
  },

  {
    id: "23",
    name: "Drunken Noodles",
    description:
      "Spicy rice noodles with egg, vegetables, chilli & fresh basil",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/23.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [1, 4],
  },

  {
    id: "24",
    name: "Thai Fried Rice",
    description: "Fried rice with egg, & mixed vegetables",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/24.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [0, 0],
  },

  {
    id: "25",
    name: "Peanut Sauce",
    description: "Stir fried vegetables in our homemade peanut sauce",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/25.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [0, 0],
  },

  {
    id: "26",
    name: "Sweet & Sour Sauce",
    description:
      "Stir fried pineapple, tomato & vegetables with our homemade sweet & sour sauce",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/26.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [0, 0],
  },

  {
    id: "27",
    name: "Ginger Sauce",
    description: "Stir fried finely sliced fresh ginger & vegetables",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/27.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [0, 0],
  },

  {
    id: "28",
    name: "Chili & Basil",
    description: "Stir fried fresh chili, basil & vegetables",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/28.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [1, 4],
  },

  {
    id: "29",
    name: "Oyster Sauce",
    description:
      "Stir fried seasoning vegetables with our homemade oyster sauce",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/29.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [0, 0],
  },

  {
    id: "30",
    name: "Cashew Nuts",
    description: "Stir fried vegetables with chili paste & cashew nuts",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/30.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [0, 0],
  },

  {
    id: "31",
    name: "Garlic & Black Pepper",
    description:
      "Steamed vegetables topping with our homemade stir fried garlic & black pepper sauce",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/31.jpeg",
    mealPeriod: "both",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [0, 0],
  },

  {
    id: "32",
    name: "Red Curry Stir Fried",
    description:
      "Stir fried red curry paste with Thai herb, vegetables, capsicum & green beans",
    price: 15,
    priceTag: [
      { title: "Vegetables/Tofu/Chicken/Beef/Pork", price: 15 },
      { title: "Combination Meals", price: 16 },
      { title: "Seafood", price: 18 },
    ],
    image: "/menu_pic/32.jpeg",
    mealPeriod: "dinner",
    dishType: "noodles-rice",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [1, 4],
  },

  {
    id: "33",
    name: "Crispy Lemon Chicken",
    description: "Crispy fried chicken with citrusy lemon sauce",
    price: 15,
    image: "/menu_pic/33.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["chicken"],
    spiceLevel: [0, 0],
  },

  {
    id: "34",
    name: "Beef Hot Plate",
    description: "Stewed tendon beef on hot plate",
    price: 28,
    image: "/menu_pic/33.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["beef"],
    spiceLevel: [0, 0],
  },
  {
    id: "35",
    name: "Sizzling Lamb",
    description: "Thai style stir fired lamb on hot plate",
    price: 28,
    image: "/menu_pic/35.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["lamb"],
    spiceLevel: [0, 0],
  },

  {
    id: "36",
    name: "Yum Salad",
    description: "Spicy taste of lemon, fish sauce, chili & vegetables",
    price: 15,
    priceTag: [
      { title: "Tofu/Chicken/Beef/Pork", price: 24 },
      { title: "Combination Meals", price: 25 },
      { title: "Seafood/ Prawns", price: 26 },
      { title: "Crispy Pork", price: 28 },
      { title: "Crispy Chicken", price: 28 },
    ],
    image: "/menu_pic/36.jpeg",
    mealPeriod: "dinner",
    dishType: "salads",
    tags: ["beef", "pork", "chicken", "seafood", "vegetarian"],
    spiceLevel: [1, 4],
  },
  {
    id: "37",
    name: "Larb",
    description:
      "Mince chicken/ beef/ pork with spring red onions, mints & corianders",
    price: 28,
    image: "/menu_pic/37.jpeg",
    mealPeriod: "dinner",
    dishType: "salads",
    tags: ["beef", "pork", "chicken"],
    spiceLevel: [1, 4],
  },

  {
    id: "38",
    name: "Nam Tok Beef",
    description: "Thai Style Char-grilled beef with Thai herbs & chili",
    price: 28,
    image: "/menu_pic/38.jpeg",
    mealPeriod: "dinner",
    dishType: "salads",
    tags: ["beef"],
    spiceLevel: [1, 4],
  },

  {
    id: "39",
    name: "Deep Fried Fish with Sweet & Sour Chili sauce",
    description:
      "Deep fried whole firsh with our homemade sweet & sauce chili sauce",
    price: 35,
    image: "/menu_pic/39.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["seafood"],
    spiceLevel: [1, 4],
  },

  {
    id: "40",
    name: "Deep Fried Fish with Herbal Salad",
    description: "Deep fried whole fish with herbal salad",
    price: 35,
    image: "/menu_pic/40.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["seafood"],
    spiceLevel: [1, 4],
  },
  {
    id: "41",
    name: "Steamed Fish with Ginger & Herb",
    description:
      "Steamed whole fish come with ginger, herb, and our homemade dark sauce",
    price: 35,
    image: "/menu_pic/41.JPG",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["seafood"],
    spiceLevel: [1, 4],
  },
  {
    id: "42",
    name: "Steamed Fish with Lime & Chili sauce",
    description:
      "Steamed whole fish come with lime, chili, and our homemade sauce",
    price: 35,
    image: "/menu_pic/42.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["seafood"],
    spiceLevel: [1, 4],
  },

  {
    id: "ns1",
    name: "Sukhothai Noodle Soup",
    description:
      " BBQ pork, pork mince, pork meat balls with Sukkhothai tom yum style",
    price: 15,
    image: "/menu_pic/ns1.jpg",
    mealPeriod: "both",
    dishType: "soups",
    tags: ["pork"],
    spiceLevel: [0, 0],
  },

  {
    id: "ns2",
    name: "Good Thai Dry Noodle",
    description:
      "BBQ pork, pork mince, pork meat balls with Good Thai sauce and crushed peanut",
    price: 16,
    image: "/menu_pic/ns1.jpg",
    mealPeriod: "both",
    dishType: "soups",
    tags: ["pork"],
    spiceLevel: [0, 0],
  },

  {
    id: "ns3",
    name: "Stewed Beef/ Pork Noodle Soup",
    description:
      "Noodle soup with tender braised beef or pork in rich flavor broth",
    price: 16,
    image: "/menu_pic/ns3.jpeg",
    mealPeriod: "both",
    dishType: "soups",
    tags: ["beef", "pork"],
    spiceLevel: [0, 0],
  },

  {
    id: "ns4",
    name: "Yen Ta Fo Seafood",
    description: "Pink noodle soup",
    price: 18,
    image: "/menu_pic/ns4.jpeg",
    mealPeriod: "both",
    dishType: "soups",
    tags: ["seafood"],
    spiceLevel: [0, 0],
  },

  {
    id: "ns5",
    name: "Clear Noodle Soup",
    description: "choice of chicken/beef/pork",
    price: 14,
    image: "/menu_pic/ns5.jpeg",
    mealPeriod: "both",
    dishType: "soups",
    tags: ["beef", "pork", "chicken"],
    spiceLevel: [0, 0],
  },

  {
    id: "r1",
    name: "Roti & Peanut Sauce",
    description: "Flaky roti served with our homemade peanut sauce",
    price: 4,
    image: "/menu_pic/r1.jpeg",
    mealPeriod: "both",
    dishType: "starters",
    tags: ["vegetarian"],
    priceTag: [
      { title: "1 pcs", price: 4 },
      { title: "2 pcs", price: 7 },
    ]
  },
  {
    id: "sp1",
    name: "Crispy Prawns with Tamarind Sauce",
    description: "Crispy prawns with sweet and tangy tamrind sauce",
    price: 28,
    image: "/menu_pic/sp1.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["seafood"],
    spiceLevel: [0, 0],
  },
  {
    id: "sp2",
    name: "BBQ Pork & Crispy Pork",
    description: "Tender BBQ pork and crispy pork served with our special Thai style sauce",
    price: 28,
    image: "/menu_pic/sp2.png",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["pork"],
    spiceLevel: [0, 0],
  },
  {
    id: "sp3",
    name: "Stwed Pork Leg on Rice",
    description: "Slow-braised pork leg served on rice with rich, savory sauce",
    price: 28,
    image: "/menu_pic/sp3.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["pork"],
    spiceLevel: [0, 0],
  },
  {
    id: "sp4",
    name: "Thai Grilled Pork",
    description: "Juciy girlled pork with Thai-style marinade",
    price: 16,
    image: "/menu_pic/sp4.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["pork"],
    spiceLevel: [0, 0],
  },
  {
    id: "sp5",
    name: "Thai Sukiyaki Seafood on Hot Plate",
    description: "Stir-fried seafood sukiyaki served sizzling on a hot plate",
    price: 26,
    image: "/menu_pic/sp5.jpeg",
    mealPeriod: "dinner",
    dishType: "mains",
    tags: ["seafood"],
    spiceLevel: [1, 4],
  },
  {
    id: "sp6",
    name: "Thai Sukiyaki Seafood Soup",
    description: "Thai-style seafood sukiyaki in a rich, savory soup",
    price: 25,
    image: "/menu_pic/sp6.jpeg",
    mealPeriod: "dinner",
    dishType: "soups",
    tags: ["seafood"],
    spiceLevel: [1, 4],
  },
];
