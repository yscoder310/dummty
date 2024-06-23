import { INFO_BAR_CONSTANTS } from "@/lib/constants";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const SocialIconsList = () => {
  return (
    <>
      <Link
        href={INFO_BAR_CONSTANTS.facebook}
        passHref
        legacyBehavior
        className=""
        aria-label="facebook"
      >
        <a target="_blank" aria-label="facebook">
          <FaFacebookF
            className="w-5 h-5 text-white hover:text-blue-500"
            aria-label="facebook"
          />
        </a>
      </Link>
      <Link
        href={INFO_BAR_CONSTANTS.instagram}
        passHref
        legacyBehavior
        className=""
        aria-label="instagram"
      >
        <a target="_blank" aria-label="instagram">
          <FaInstagram
            className="w-5 h-5  text-white hover:text-pink-400"
            aria-label="instagram"
          />
        </a>
      </Link>
      <Link
        href={INFO_BAR_CONSTANTS.linkedin}
        passHref
        legacyBehavior
        className=""
        aria-label="linkedin"
      >
        <a target="_blank" aria-label="linkedin">
          <FaLinkedin
            className="w-5 h-5  text-white hover:text-blue-800"
            aria-label="linkedin"
          />
        </a>
      </Link>
      <Link
        href={INFO_BAR_CONSTANTS.spotify}
        passHref
        legacyBehavior
        className=""
        aria-label="spotify"
      >
        <a target="_blank" aria-label="spotify">
          <FaSpotify
            className="w-5 h-5  text-white hover:text-green-500"
            aria-label="spotify"
          />
        </a>
      </Link>
      <Link
        href={INFO_BAR_CONSTANTS.youtube}
        passHref
        legacyBehavior
        className=""
        aria-label="youtube"
      >
        <a target="_blank" aria-label="youtube">
          <FaYoutube
            className="w-5 h-5  text-white hover:text-red-500"
            aria-label="youtube"
          />
        </a>
      </Link>
    </>
  );
};
