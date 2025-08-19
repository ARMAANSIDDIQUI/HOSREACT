import React from "react";

const MediaCard = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  readMoreText,
  onReadMoreClick,
}) => {
  return (
    <div className="max-w-md mx-auto text-center p-6 bg-white">
      {/* Circular image */}
      <div className="flex justify-center mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          // The `rounded-full` class creates a perfect circle from the square image.
          className="w-32 h-32 rounded-full border border-gray-400"
        />
      </div>

      {/* Title */}
      <h3 className="text-orange-600 font-semibold mb-2 px-4">{title}</h3>

      {/* Subtitle */}
      <h5 className="text-sm font-semibold text-blue-900 mb-4">{subtitle}</h5>

      {/* Description paragraph */}
      <p className="text-gray-800 text-sm px-6 mb-4">{description}</p>

      {/* Read More link */}
      <p
        // This `onClick` event handler calls the function passed from the parent component, which allows for custom behavior when the link is clicked.
        onClick={onReadMoreClick}
        className="text-orange-600 font-semibold cursor-pointer hover:underline"
      >
        {readMoreText}
      </p>
    </div>
  );
};

export default MediaCard;