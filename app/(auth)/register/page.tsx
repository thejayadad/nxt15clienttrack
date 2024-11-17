'use client'

import React, { useState, useEffect } from 'react';
import SiteModal from '@/components/modal/site-modal';  // Import the SiteModal component

const RegisterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility

  useEffect(() => {
    // Open the modal when the component mounts (on page load)
    setIsModalOpen(true);
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  const handleModalClose = () => {
    setIsModalOpen(false);  // Close the modal when triggered
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
    setIsModalOpen(false);  // Close the modal after submission
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Register Page</h2>

      <SiteModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        title="Register"
        actionLabel="Submit"
        disabled={false}
        body={
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md"
            />
          </form>
        }
      />
    </div>
  );
};

export default RegisterPage;
