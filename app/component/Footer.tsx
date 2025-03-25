import React from "react";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "About", slug: "/about", active: true },
    { name: "Schedule", slug: "/schedule", active: true },
    { name: "Prizes", slug: "/prizes", active: true },
    { name: "Sponsors", slug: "/sponsors", active: true },
    { name: "Tracks", slug: "/tracks", active: true },
    { name: "Contact", slug: "/contact", active: true },
  ];
  return (
    <footer className="bg-[#008FAD] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Innovation Unleashed</h3>
            <p className="text-gray-100">
              Join us for the biggest hackathon of 2025!
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-100">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link href={item.slug} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-100">
              <li>
                <a href="#" className="hover:text-white">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/CSIT-Association-of-BMC"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-6 w-6 text-gray-100" />
              </a>
              <a
                href="https://www.linkedin.com/company/bmcinnovatex"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-6 w-6 text-gray-100" />
              </a>
              <a
                href="https://www.facebook.com/BMCInnovateX"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6 text-gray-100" />
              </a>
              <a
                href="https://www.instagram.com/bmcinnovatex/"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6 text-gray-100" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-100">
          <p>&copy; 2025 Innovation Unleashed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
