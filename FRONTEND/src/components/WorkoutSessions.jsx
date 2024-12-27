import React from 'react';
import workoutimg from '../assets/gym.jpeg';

const WorkoutSessions = () => {
  return (
    <section className='flex flex-col lg:flex-row px-4 lg:px-12 py-10 gap-5 bg-gray-900'>
      <div className='w-full lg:w-1/2 flex flex-col justify-center text-left space-y-4 '>
        <p className='text-2xl lg:text-3xl font-semibold text-white'>Top Workout Session</p>
        <p className='text-gray-400'>Exercitation eu irure reprehenderit deserunt eu occaecat mollit consectetur exercitation esse veniam aliqua ea.</p>
        <div><img className='w-full rounded-lg shadow-lg' src={workoutimg} alt="Workout" /></div>
      </div>

      <div className='w-full lg:w-1/2 space-y-4'>
        <p className='text-2xl lg:text-3xl font-semibold text-white'>FEATURED BOOTCAMPS</p>
        <p className='text-gray-400'>Adipisicing elit aliqua sunt cupidatat consequat adipisicing culpa quis ipsum deserunt sit ex irure Lorem.</p>

        <div className='space-y-4'>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className='border-2 border-gray-700 py-2 px-1 bg-gray-800 hover:bg-gray-700 hover:text-blue-400 rounded-lg'>
              <p className='font-medium text-white'>{index}. Ipsum eu laboris pariatur veli sunt aliquip nulla officia sit anim id.</p>
              <p className='text-gray-400'>Ipsum eu laboris pariatur velit aliqua aliquip sunt aliquip nulla officia sit anim id. aliquip nulla officia sit anim id.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkoutSessions;
