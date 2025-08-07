import React from "react";

export default function TherapyInfoSection({
  imageSrc = [],
  imageAlt = "Therapy Image",
  title,
  subtitle,
  paragraphs = [],
  links = {},
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12 max-w-screen-xl mx-auto">

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
        {Array.isArray(imageSrc)
          ? imageSrc.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${imageAlt} ${idx + 1}`}
                className="w-full max-w-[400px] aspect-[4/3] object-cover rounded-xl shadow-xl"
              />
            ))
          : (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full max-w-[400px] aspect-[4/3] object-cover rounded-xl shadow-xl"
              />
            )}
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2">

        <p className="text-lg font-medium text-gray-700 mb-6">{subtitle}</p>

        {paragraphs.map((para, index) => (
          <p key={index} className="text-gray-600 mb-4">
            {para}
          </p>
        ))}

        {links.more && (
          <div className="mt-4">
            <a
              href={links.more}
              className="text-pink-600 font-semibold hover:underline"
            >
              MORE ABOUT US →
            </a>
          </div>
        )}
      </div>
    </section>
    </div>
  );
}
