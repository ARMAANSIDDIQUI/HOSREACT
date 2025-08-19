import React from "react";

export default function CareersCard({
  image,
  title,
  subtitle,
  description,
  roles = [],
  responsibilities = [],
  timings,
  sessions,
  jobOpenings = [],
  locations = [],
  about,
  sign,
  reverse = false,
}) {
  return (
    <div
      // The `reverse` prop conditionally changes the layout direction on medium screens and up.
      className={`w-full flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-white shadow-lg rounded-xl overflow-hidden mb-10 border`}
    >
      {/* Image */}
      <div className="md:w-1/2 h-64 md:h-auto">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      {/* Content */}
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-pink-700 mb-2">{title}</h2>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            {subtitle}
          </h3>

          {/* `whitespace-pre-line` preserves line breaks in the text. */}
          <p className="text-gray-700 text-sm mb-4 whitespace-pre-line">
            {description}
          </p>

          {/* This section only renders if the `roles` array is not empty. */}
          {roles?.length > 0 && (
            <>
              <h4 className="font-semibold mt-4 text-pink-700">
                Roles & Responsibilities
              </h4>
              <ul className="list-disc ml-6 text-sm text-gray-800 space-y-1 mt-1">
                {roles.map((role, index) => (
                  <li key={`role-${index}`}>{role}</li>
                ))}
              </ul>
            </>
          )}

          {/* This section only renders if the `responsibilities` array is not empty. */}
          {responsibilities?.length > 0 && (
            <>
              <h4 className="font-semibold mt-4 text-pink-700">
                Responsibilities
              </h4>
              <ul className="list-disc ml-6 text-sm text-gray-800 space-y-1 mt-1">
                {responsibilities.map((res, index) => (
                  <li key={`resp-${index}`}>{res}</li>
                ))}
              </ul>
            </>
          )}

          {/* This section only renders if the `timings` prop is provided. */}
          {timings && (
            <p className="mt-4 text-sm">
              <span className="font-medium text-pink-700">Timings:</span>{" "}
              {timings}
            </p>
          )}

          {/* This section only renders if the `sessions` prop is provided. */}
          {sessions && (
            <p className="text-sm">
              <span className="font-medium text-pink-700">
                Sessions per day:
              </span>{" "}
              {sessions}
            </p>
          )}

          {/* This section only renders if the `jobOpenings` array is not empty. */}
          {jobOpenings?.length > 0 && (
            <>
              <h4 className="font-semibold mt-4 text-pink-700">Job Openings</h4>
              <ul className="list-disc ml-6 text-sm text-gray-800 space-y-1 mt-1">
                {jobOpenings.map((job, index) => (
                  <li key={`job-${index}`}>{job}</li>
                ))}
              </ul>
            </>
          )}

          {/* This section only renders if the `locations` array is not empty. */}
          {locations?.length > 0 && (
            <>
              <h4 className="font-semibold mt-4 text-pink-700">Locations</h4>
              <ul className="list-disc ml-6 text-sm text-gray-800 space-y-1 mt-1">
                {locations.map((loc, index) => (
                  <li key={`loc-${index}`}>{loc}</li>
                ))}
              </ul>
            </>
          )}

          {/* This section only renders if the `about` prop is provided. */}
          {about && (
            <>
              <h4 className="font-semibold mt-4 text-pink-700">
                About Pinnacle
              </h4>
              <p className="text-sm text-gray-700 whitespace-pre-line mt-1">
                {about}
              </p>
            </>
          )}
        </div>

        {/* This section only renders if the `sign` prop is provided. */}
        {sign && (
          <div className="mt-6 text-right italic text-pink-600 text-sm">
            {sign}
          </div>
        )}
      </div>
    </div>
  );
}