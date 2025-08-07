import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CustomCarousel = ({ slides }) => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
        swipeable
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />

            {/* Animated Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-end pr-4 md:pr-12"
            >
              <div className="bg-purple-600 bg-opacity-90 text-white p-4 md:p-6 rounded-xl shadow-lg max-w-[90%] sm:max-w-[400px]">
                <h2 className="text-lg sm:text-2xl font-bold mb-2">{slide.heading}</h2>
                <p className="text-sm sm:text-base mb-3">{slide.text}</p>

                {slide.url && (
                  <a
                    href={slide.url}
                    className="flex items-center text-white hover:text-purple-200 transition group"
                  >
                    <span className="mr-1 font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
