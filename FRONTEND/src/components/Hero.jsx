import React from 'react';
import gymImage from '../assets/gym.jpg'; 

const Hero = () => {
  return (
    <section className="relative bg-gray-800 text-white bg-cover bg-center" style={{ backgroundImage: `url(${gymImage})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container relative mx-auto px-6 py-16 text-left h-screen flex items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to Gymify</h1>
          <p className="text-lg mb-8">Achieve your fitness goals with us</p>
          <div className="md:space-x-5 space-y-5">
            <button className="bg-transparent border hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Start Your Journey
            </button>
            <button className="bg-transparent border hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Discover Your Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
