
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/nursery/1920/1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="md:w-3/4 lg:w-1/2">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">Welcome To</h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-green-300">Paradise Nursery</h2>
            <p className="text-lg md:text-xl mt-4">Where Green Meets Serenity</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto">
             <p className="text-md md:text-lg mb-6 text-gray-200">
                At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle.
            </p>
             <Link to="/products">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
