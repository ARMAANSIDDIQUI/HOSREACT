import { FaFacebookF, FaInstagram, FaHeart, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const FooterCommon = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-purple-900 to-purple-700 text-white px-6 py-10">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header & Mission */}
          <div>
            <h2 className="text-xl font-semibold mb-2">HOUSE OF SPECIALS</h2>
            <p className="text-sm font-medium flex items-start gap-2">
              <FaHeart className="text-pink-600 mt-1" size={44}/>
              We are committed to empowering individuals with sensory, neurological, and emotional challenges by offering compassionate support, personalized care, and meaningful opportunities. Our aim is to help each person build the confidence and skills they need to thrive independently, feel included in society, and live a fulfilling life — filled with dignity, joy, and purpose.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span><a href="tel:+918979733393">(+91) 89797 33393</a></span>
              <span><a href="tel:+917453916852">(+91) 74539 16852</a></span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span><a href="mailto:houseofspecials19@gmail.com">houseofspecials19@gmail.com</a></span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <a href="https://share.google/ib5KJKfwaIuxh46Io">
                <span>
                  DR. RAM SWARUP COLONY NEAR TAJ BANQUET HALL MORADABAD 244001
                </span>
              </a>
            </div>
          </div>

          {/* Community Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium mb-2">OUR COMMUNITY</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/19L1QvtLtH/"
                  target="_blank"
                  // `rel="noopener noreferrer"` is used for security when linking to new tabs.
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:underline"
                >
                  <FaFacebookF /> FACEBOOK
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/houseofspecialswelfare?igsh=MWRzNmJlcjZpNGRwMg=="
                  target="_blank"
                  // `rel="noopener noreferrer"` is used for security when linking to new tabs.
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:underline"
                >
                  <FaInstagram /> INSTAGRAM
                </a>
              </li>
              <li className="flex items-center gap-3">
                {/* This `Link` component from `react-router-dom` provides client-side navigation without a full page reload. */}
                <Link to="/contact" className="flex items-center gap-3 hover:underline">
                  <span role="img" aria-label="email emoji">📧</span> CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCommon;