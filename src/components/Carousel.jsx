import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CustomCarousel = ({ slides }) => {
  return (
    <div className="w-full">
      <Carousel
        // Enables automatic playback and an endless loop.
        autoPlay
        infiniteLoop
        // Hides the thumbnail and status indicators.
        showThumbs={false}
        showStatus={false}
        // Sets the time between slides and the transition speed.
        interval={5000}
        transitionTime={1000}
        // Activates touch-based swiping for navigation.
        swipeable
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />

            {/* Animated Text Overlay */}
            <motion.div
              // Sets the initial animation state (hidden and slightly moved down).
              initial={{ opacity: 0, y: 30 }}
              // Defines the final animation state (fully visible and in position).
              animate={{ opacity: 1, y: 0 }}
              // Sets the duration of the animation.
              transition={{ duration: 1 }}
              className="
                absolute inset-x-0 bottom-4 flex justify-center
                md:top-0 md:bottom-0 md:right-8 md:left-auto md:justify-end md:items-center
              ">

              <div className="bg-purple-600 bg-opacity-90 text-white p-4 md:p-6 rounded-xl shadow-lg max-w-[90%] sm:max-w-[400px]">
                <h2 className="text-lg sm:text-2xl font-bold mb-2">{slide.heading}</h2>
                <p className="text-sm sm:text-base mb-3">{slide.text}</p>

                {/* Conditionally renders the 'Learn more' link only if a URL exists. */}
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