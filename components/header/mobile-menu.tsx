'use client'

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for the menu button and close button
import Logo from '../ui/logo'; // Assuming Logo is a component
import AuthLinkItems from './auth-link-item';

// Define the routes array
const routes = [
  {
    label: 'Events',
    href: '/',
  },
  {
    label: 'Bookings',
    href: '/bookings',
  },
  {
    label: 'Add Event',
    href: '/add',
  },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu visibility

  const toggleMenu = () => setIsOpen(!isOpen); // Function to toggle the menu visibility

  return (
    <div>
      {/* Button to open the mobile menu */}
      <button
        className="md:hidden p-4 text-white bg-gray-600 rounded-lg"
        onClick={toggleMenu}
      >
        <FiMenu className="h-4 w-4" />
      </button>

      {/* Full-Screen Mobile Menu - Transition from the bottom */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-75 z-50 transform transition-all duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 md:hidden p-4 text-white bg-gray-600 rounded-lg"
        >
          <FiX className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center justify-center h-full text-white">
          {/* Logo Section */}
          <div className="mb-8">
            <Logo />
          </div>

          {/* Links Section */}
          <div className="space-x-4 mb-8">
            {/* Loop through the routes array to create the links */}
            {routes.map((route, index) => (
              <AuthLinkItems
                key={index}
                label={route.label}
                href={route.href} // Use 'to' for React Router or 'href' for Next.js
              />
            ))}
          </div>

          {/* Footer Section */}
          <div className="text-sm text-gray-500">
            <p>&copy; 2024 thejayadad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
