
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {
  selectCartItems,
  selectCartTotalAmount,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/cartSlice';
import { CartItem } from '../types';

const CartItemCard: React.FC<{ item: CartItem }> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm mb-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-3 mx-4">
        <button onClick={() => dispatch(decreaseQuantity(item.id))} className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold">-</button>
        <span className="font-semibold w-6 text-center">{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))} className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold">+</button>
      </div>
      <div className="text-right w-24">
        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
       <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-6 text-red-500 hover:text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};


const CartPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Your cart is empty.</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added any plants yet.</p>
            <Link to="/products" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map(item => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-semibold border-b pb-4 mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">FREE</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t pt-4">
                  <span>Total Cart Amount:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="mt-6 space-y-3">
                    <button onClick={handleCheckout} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition duration-300">
                        Checkout
                    </button>
                    <Link to="/products" className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-md transition duration-300">
                      Continue Shopping
                    </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;
