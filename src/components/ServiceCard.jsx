import { motion } from "framer-motion";

export default function ServiceCard({
  imageSrc,
  altText,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  reverse = false, // Layout orientation
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
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
        {subtitle && <p className="text-lg text-indigo-600 mb-4">{subtitle}</p>}
        <p className="mb-6 leading-relaxed text-gray-600">{description}</p>
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
