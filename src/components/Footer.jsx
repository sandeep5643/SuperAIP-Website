import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-14 px-6" style={{ paddingTop: 50 }}>
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>
            <img
              src="src\assets\super_aip1.png"
              alt="SuperAIP Logo"
              className="w-32 mb-4"
            />

            <p className="text-sm text-gray-600 mb-6 text-left">
              An advanced AI assistant that reads, understands, and answers
              questions about your documents — entirely offline.
            </p>

            <div className="flex gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-blue-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 text-left" style={{color: '#19369d', fontSize: '1.52rem'}}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600 text-left">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-black">Industries</a></li>
              <li><a href="#" className="hover:text-black">Partners</a></li>
              <li><a href="#" className="hover:text-black">Research</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 text-left"  style={{color: '#19369d', fontSize: '1.52rem'}}>
              Services
            </h3>
            <ul className="space-y-2 text-gray-600 text-left">
              <li><a href="#" className="hover:text-black">Web Development</a></li>
              <li><a href="#" className="hover:text-black">Graphics Design</a></li>
              <li><a href="#" className="hover:text-black">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-black">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 text-left" style={{color: '#19369d', fontSize: '1.52rem'}}>
              Support
            </h3>
            <ul className="space-y-2 text-gray-600 text-left">
              <li><a href="#" className="hover:text-black">Company</a></li>
              <li><a href="#" className="hover:text-black">Press Media</a></li>
              <li><a href="#" className="hover:text-black">Our Blog</a></li>
              <li><a href="#" className="hover:text-black">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2024 SuperAIP. All rights reserved.
        </div>

      </div>
    </footer>
  );
}