
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../redux/cartSlice';

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.998 3.5a1.5 1.5 0 00-1.423 1.015l-4.5 9A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.423-2.485l-4.5-9A1.5 1.5 0 009.998 3.5z" clipRule="evenodd" />
        <path d="M10 18c-2.834 0-5.36-1.35-7.071-3.536A8.001 8.001 0 0110 2c2.834 0 5.36 1.35 7.071 3.536A8.001 8.001 0 0110 18z" opacity="0.2" />
        <path d="M10 3.5c-.71 0-1.36.27-1.87.7L10 6.5l1.87-2.3C11.36 3.77 10.71 3.5 10 3.5zm0 13c.71 0 1.36-.27 1.87-.7L10 13.5l-1.87 2.3c.51.43 1.16.7 1.87.7z" opacity="0.2" />
        <path fillRule="evenodd" d="M10 2a.5.5 0 00-.5.5v15a.5.5 0 001 0v-15A.5.5 0 0010 2z" clipRule="evenodd" opacity="0.2" />
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5.657-4.343a6 6 0 118.485-8.485 6 6 0 01-8.485 8.485z" fill="url(#leaf-gradient)" />
        <defs>
            <linearGradient id="leaf-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#84CC16" />
                <stop offset="100%" stopColor="#4D7C0F" />
            </linearGradient>
        </defs>
    </svg>
);


const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const Header: React.FC = () => {
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <header className="bg-green-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <LeafIcon />
            <div className="text-white">
              <h1 className="text-xl font-bold">Paradise Nursery</h1>
              <p className="text-xs font-light">Where Green Meets Serenity</p>
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link to="/products" className="text-white hover:text-green-200 transition duration-150 ease-in-out">
              Plants
            </Link>
            <Link to="/cart" className="relative text-white hover:text-green-200 transition duration-150 ease-in-out">
              <CartIcon />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
