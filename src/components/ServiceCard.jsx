import { motion } from "framer-motion";

export default function ServiceCard({
  imageSrc,
  altText,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  reverse = false, // Controls the layout orientation.
}) {
  return (
    // `motion.div` from `framer-motion` adds animation to the component as it comes into view.
    <motion.div
      // Sets the initial state of the animation (invisible and slightly below its final position).
      initial={{ opacity: 0, y: 30 }}
      // Triggers the animation when the element enters the viewport.
      whileInView={{ opacity: 1, y: 0 }}
      // Defines the animation duration and easing.
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Ensures the animation only plays once.
      viewport={{ once: true }}
      // The `reverse` prop conditionally adds `md:flex-row-reverse` to flip the image and text order on medium screens and up.
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-between gap-8 p-6 md:p-12 bg-white`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={altText}
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {/* Conditionally renders the subtitle if the `subtitle` prop exists. */}
        {subtitle && <p className="text-lg text-indigo-600 mb-4">{subtitle}</p>}
        <p className="mb-6 leading-relaxed text-gray-600">{description}</p>
        {/* Conditionally renders the button if both `buttonText` and `buttonLink` props exist. */}
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="text-pink-600 font-semibold hover:underline"
          >
            {buttonText}
          </a>
        )}
      </div>
    </motion.div>
  );
}