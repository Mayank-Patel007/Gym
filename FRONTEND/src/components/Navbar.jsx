import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white text-xl font-bold">
          Gymify
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#bmi-calculator" className="text-white hover:text-blue-400">BMI Calculator</a>
            </li>
            <li>
              <a href="#pricing" className="text-white hover:text-blue-400">Pricing</a>
            </li>
            <li>
              <a href="#gallery" className="text-white hover:text-blue-400">Gallery</a>
            </li>
            <li>
              <a href="#work-sessions" className="text-white hover:text-blue-400">Work Sessions</a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
