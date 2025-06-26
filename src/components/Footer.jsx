import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf, FaEnvelope, FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-green-800 to-emerald-900 text-white mt-28 pt-6 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <FaLeaf className="text-2xl text-emerald-300 mr-2" />
              <h2 className="text-xl font-bold">GardenTips</h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              The premier platform for gardening enthusiasts to share knowledge, connect with local gardeners, 
              and participate in community events. Whether you're into composting, hydroponics, or balcony gardens, 
              we provide the tools to grow your passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-emerald-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="gardeners-all" className="text-gray-300 hover:text-white transition-colors">Explore Gardeners</Link></li>
              <li><Link to="/browseTips" className="text-gray-300 hover:text-white transition-colors">Browse Tips</Link></li>
              <li><Link to="/aboutUs" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
              
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-emerald-500 pb-2">Connect With Us</h3>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2 text-emerald-300" />
                <span className="text-sm text-gray-300">rantumondal06@gamil.com</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <Link to="https://www.facebook.com/" className="text-gray-300 hover:text-white transition-colors">
                  <FaFacebook className="text-xl" />
                </Link>
                <Link to="https://x.com/?lang=en" className="text-gray-300 hover:text-white transition-colors">
                  <FaTwitter className="text-xl" />
                </Link>
                <Link to="https://www.instagram.com/" className="text-gray-300 hover:text-white transition-colors">
                  <FaInstagram className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm text-gray-400 mb-4 md:mb-0">
            <FaRegCopyright className="mr-1" />
            <span>{currentYear} Rantu Mondal. All rights reserved.</span>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;