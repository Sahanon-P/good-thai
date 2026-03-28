import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import Chefs from "@/components/Chefs";
import Testimonials from "@/components/Testimonials";
import ContactHours from "@/components/ContactHours";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeaturedDishes />
      <Chefs />
      <Testimonials />
      <ContactHours />
      <Footer />
    </main>
  );
}
