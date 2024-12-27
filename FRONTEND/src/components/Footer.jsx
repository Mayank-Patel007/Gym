import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <div>
      <hr className=''/>
      <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between sm:flex-row">
        <p className="mb-4 sm:mb-0">Designed and Developed By Mayank Patel</p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
