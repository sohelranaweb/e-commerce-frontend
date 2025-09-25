import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-10">
      <div className="w-full max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Faq
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold mb-3">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Payment */}
        <div>
          <h3 className="font-bold mb-3">Payment</h3>
          <div className="flex flex-wrap gap-3 text-3xl">
            <FaCcPaypal />
            <FaCcMastercard />
            <FaCcVisa />
            <FaCcAmex />
            <FaCcDiscover />
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold mb-3">Social</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaInstagram />{" "}
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaFacebook />{" "}
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaTwitter />{" "}
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin />{" "}
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t mt-6 pt-4 text-center text-sm text-gray-600">
        © 2025 - All rights reserved by Ishop
      </div>
    </footer>
  );
}
