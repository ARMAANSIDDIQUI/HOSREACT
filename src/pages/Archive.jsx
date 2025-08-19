import Navbar from "../components/Navbar";
import FooterCommon from "../components/FooterCommon";
import CustomCarousel from "../components/Carousel";

import Cooking from "../components/Cooking";
import Festivals from "../components/Festivals";
import Movie from "../components/Movie";
import Restaurant from "../components/Restaurant";
import Shopping from "../components/Shopping";
import SocialSkills from "../components/SocialSkills";
import SportsDay from "../components/SportsDay";
import Vocational from "../components/Vocational";

import { Utensils, PartyPopper, Film, Coffee, ShoppingBag, Users, Medal, Briefcase, ArrowUp } from "lucide-react";

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel5 from "../assets/carousel5.jpg";

// This array defines the content for the custom carousel at the top of the page.
export const carouselData = [
  { image: carousel0, heading: "Every Child Can Learn", text: "Just not on the same day or in the same way.", url: "/services" },
  { image: carousel1, heading: "Celebrate Every Milestone", text: "What seems small to you is a mountain climbed for them.", url: "/adl-training" },
  { image: carousel5, heading: "See the Able, Not the Label", text: "Labels are for jars, not people.", url: "/special-education" },
  { image: carousel3, heading: "Different, Not Less", text: "Neurodiversity is a gift to be embraced.", url: "/about" },
];

// This array provides data for the navigation bar, linking to specific sections on the page.
const sectionsNav = [
  { id: "cooking", label: "Cooking", icon: Utensils },
  { id: "festivals", label: "Festivals", icon: PartyPopper },
  { id: "movie", label: "Movie", icon: Film },
  { id: "restaurant", label: "Restaurant", icon: Coffee },
  { id: "shopping", label: "Shopping", icon: ShoppingBag },
  { id: "socialskills", label: "Social Skills", icon: Users },
  { id: "sportsday", label: "Sports Day", icon: Medal },
  { id: "vocational", label: "Vocational", icon: Briefcase },
];

// This is a small, reusable component for the "Back to Top" button.
const BackToTopButton = () => (
  <div className="mt-6 flex justify-end">
    {/* The `href="#top"` attribute creates a link that smoothly scrolls to the element with the ID "top" on the same page. */}
    <a
      href="#top"
      className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
    >
      <ArrowUp className="w-5 h-5" /> Back to Top
    </a>
  </div>
);

const Archive = () => {
  return (
    // The `id="top"` attribute is the target for the "Back to Top" button.
    <div className="bg-gradient-to-br from-purple-100 to-white" id="top">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      {/* Navigation placed after carousel */}
      <div className="flex justify-center my-6">
        <div className="flex flex-wrap justify-center gap-4 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 border border-purple-200 max-w-4xl">
          {/* This `map` function iterates over the `sectionsNav` array to dynamically create navigation links. */}
          {sectionsNav.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`} // The `href` attribute links to the corresponding section `id`.
              className="flex items-center gap-2 hover:bg-purple-100 transition px-3 py-2 rounded-full"
            >
              <Icon className="w-5 h-5 text-purple-700" />
              <span className="text-purple-700 font-medium hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="px-6 py-8 space-y-20 scroll-smooth">
        {/* Each section contains a content component and a "Back to Top" button. */}
        {/* The `id` on each section is the target for the navigation links created above. */}
        <section className="flex flex-col items-center" id="cooking">
          <Cooking />
          <BackToTopButton />
        </section>
        <section className="flex flex-col items-center" id="festivals">
          <Festivals />
          <BackToTopButton />
        </section>
        <section className="flex flex-col items-center" id="movie">
          <Movie />
          <BackToTopButton />
        </section>
        <section className="flex flex-col items-center" id="restaurant">
          <Restaurant />
          <BackToTopButton />
        </section>
        <section className="flex flex-col items-center" id="shopping">
          <Shopping />
          <BackToTopButton />
        </section>
        <section className="flex flex-col items-center" id="socialskills">
          <SocialSkills />
          <BackToTopButton />
        </section>
        <section className="flex flex-col items-center" id="sportsday">
          <SportsDay />
          <BackToTopButton />
        </section>
        <section className="flex flex-col items-center" id="vocational">
          <Vocational />
          <BackToTopButton />
        </section>
      </div>

      <FooterCommon />
    </div>
  );
};

export default Archive;