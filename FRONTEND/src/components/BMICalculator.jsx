import React, { useState } from 'react';
import { toast } from 'react-toastify';
import bmiimg from "../assets/bmiimg.jpeg";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter height, weight, and gender.");
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are underweight, consider seeking advice from a healthcare provider.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight. Keep maintaining a healthy lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight, consider seeking advice from a healthcare provider.");
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-extrabold text-white mb-8">BMI CALCULATOR</h2>
      <div className="max-w-4xl w-full space-y-8 bg-gray-800 p-8 shadow-md rounded-lg flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 w-full pt-20 order-1 flex-grow">
          <form onSubmit={calculateBMI} className="space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div className="mb-4">
                <label htmlFor="height" className="block text-sm font-medium text-gray-300">
                  Height (cm)
                </label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  className="appearance-none bg-transparent border-b border-gray-500 w-full px-3 py-2 text-gray-200 focus:outline-none focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your height"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="weight" className="block text-sm font-medium text-gray-300">
                  Weight (kg)
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  className="appearance-none bg-transparent border-b border-gray-500 w-full px-3 py-2 text-gray-200 focus:outline-none focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your weight"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-300">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="appearance-none bg-transparent border-b border-gray-500 w-full px-3 py-2 text-gray-200 focus:outline-none focus:border-indigo-500 sm:text-sm"
                >
                  <option  className='text-gray-700' value="">Select Gender</option>
                  <option className='text-black' value="Male">Male</option>
                  <option className='text-black' value="Female">Female</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Calculate BMI
              </button>
            </div>
          </form>
          {bmi && (
            <div className="mt-6 text-center">
              <p className="text-lg font-medium text-white">Your BMI: {bmi}</p>
            </div>
          )}
        </div>
        <div className="lg:w-1/2 w-full lg:ml-10 mt-8 lg:mt-0 order-0 lg:order-2 flex-grow">
          <img src={bmiimg} alt="BMI" className="rounded-lg shadow-lg w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
