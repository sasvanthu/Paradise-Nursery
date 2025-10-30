
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectIsInCart } from '../redux/cartSlice';
import { plants } from '../data/plants';
import Header from '../components/Header';
import { Plant } from '../types';

const PlantCard: React.FC<{ plant: Plant }> = ({ plant }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(selectIsInCart(plant.id));

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={plant.image} alt={plant.name} />
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">Sale</span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1">{plant.name}</h3>
        <p className="text-gray-600 text-sm mb-2 flex-grow">{plant.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-xl font-bold text-green-600">${plant.price}</p>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`px-4 py-2 rounded-md font-semibold text-sm transition duration-300 ${
              isInCart
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductListing: React.FC = () => {
  const groupedPlants = plants.reduce((acc, plant) => {
    (acc[plant.category] = acc[plant.category] || []).push(plant);
    return acc;
  }, {} as Record<string, Plant[]>);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Object.entries(groupedPlants).map(([category, plantsInCategory]) => (
          <section key={category} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-green-600 pl-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {plantsInCategory.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ProductListing;
