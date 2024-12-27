import React from 'react';
import img1 from '../assets/gym.jpeg';
import img2 from '../assets/gym.jpg';
import img3 from '../assets/price.webp';
import img4 from '../assets/gym.jpg';
import img5 from '../assets/price.webp';
import img6 from '../assets/gym.jpeg';

const gallery = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

const Gallery = () => {
  const getRandomSize = () => {
    const sizes = ['h-64']; 
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <section className='py-10 bg-gray-800'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center text-white mb-8'>Better Beats Best</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {gallery.map((imgSrc, index) => (
            <div key={index} className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'>
              <img src={imgSrc} alt={`Gallery Image ${index + 1}`} className={`w-full object-cover ${getRandomSize()}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
