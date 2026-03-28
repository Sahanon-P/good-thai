export interface Chef {
  name: string;
  title: string;
  bio: string;
  image: { src: string; alt: string };
}

export const chefs: Chef[] = [
  {
    name: "Chef Phirom Bunphan",
    title: "Our Chef",
    bio: "Head Chef Phirom Bunphun originates from Sukhothai, the historic centre of Thai culture, and possesses over thirty years of culinary experience. With a lifelong commitment to Thai cuisine, he has developed a skilled understanding of balancing bold flavours, aromatic herbs, and refined techniques that characterise authentic Thai cooking. His culinary philosophy emphasises discipline, craftsmanship, and respect for tradition, ensuring that each dish is both meticulously prepared and richly rooted in cultural heritage.",
    image: {
      src: "/chef_closeup.png",
      alt: "Chef Phirom Bunphan",
    },
  },
];

export const chefsSection = {
  eyebrow: "Meet the Team",
  heading: "Behind the Curtains",
  teamImage: {
    src: "/chef.png",
    alt: "Good Thai kitchen team",
  },
};
