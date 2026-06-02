import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kuldipl78',
      icon: FiGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kuldip-lohare',
      icon: FiLinkedin
    },
    {
      name: 'Email',
      url: 'mailto:kuldiplohare101@gmail.com',
      icon: FiMail
    },
    {
      name: 'Phone',
      url: 'tel:+917887589853',
      icon: FiPhone
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-primary-400" />
                <span>Pune, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-primary-400" />
                <a 
                  href="mailto:kuldiplohare101@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  kuldiplohare101@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary-400" />
                <a 
                  href="tel:+917887589853"
                  className="hover:text-primary-400 transition-colors"
                >
                  +91-7887589853
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block hover:text-primary-400 transition-colors">Home</a>
              <a href="/skills" className="block hover:text-primary-400 transition-colors">Skills</a>
              <a href="/projects" className="block hover:text-primary-400 transition-colors">Projects</a>
              <a href="/experience" className="block hover:text-primary-400 transition-colors">Experience</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Full-stack software professional with 2+ years of experience in React, React Native, FastAPI, Node.js.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Kuldip Lohare. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;