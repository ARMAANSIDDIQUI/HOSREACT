import Navbar from "../components/Navbar";
import FooterCommon from "../components/FooterCommon";
import CustomCarousel from "../components/Carousel";

import carousel0 from "../images/Carousel0.jpg";
import carousel1 from "../images/Carousel1.jpg";
import carousel2 from "../images/Carousel2.jpg";
import carousel3 from "../images/Carousel3.jpg";
import carousel5 from "../images/Carousel5.jpg";


export const carouselData = [
  {
    image: carousel0,
    heading: "Every Child Can Learn",
    text: "Just not on the same day or in the same way.",
    url: "/services",
  },
  {
    image: carousel1,
    heading: "Celebrate Every Milestone",
    text: "What seems small to you is a mountain climbed for them.",
    url: "/adl-training",
  },
  {
    image: carousel5,
    heading: "See the Able, Not the Label",
    text: "Labels are for jars, not people.",
    url: "/special-education",
  },
  {
    image: carousel3,
    heading: "Different, Not Less",
    text: "Neurodiversity is a gift to be embraced.",
    url: "/about",
  },
];


const mediaData = [
  { image: carousel1, title: "1", date: "March 10, 2024" },
  { image: carousel2, title: "2", date: "Feb 18, 2024" },
  { image: carousel3, title: "3", date: "Jan 5, 2024" },
];

const Archive = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Event Highlights</h2>
        <div className="flex flex-wrap justify-evenly gap-6 p-6">
          {mediaData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterCommon />
    </div>
  );
};

export default Archive;
