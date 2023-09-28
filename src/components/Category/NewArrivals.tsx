// NewArrivalsPage.tsx
import React from 'react';
import { useCategorizedData, Product } from '../../utils/dataUtils';

const NewArrivalsPage: React.FC = () => {
  const { categorizedData } = useCategorizedData();

  // Access the "New Arrivals" data
  const newArrivals = categorizedData['New Arrivals'];

  const renderNewArrivals = (products: Product[]) => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">New Arrivals</h2>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id} className="m-4">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
              <p className="mt-2 text-center">{product.name}</p>
              <p className="mt-1 text-center text-gray-500">{product.artist}</p>
              <p className="mt-1 text-center text-yellow-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="py-4">
      {renderNewArrivals(newArrivals)}
      {/* You can add more content specific to the "New Arrivals" page here */}
    </div>
  );
};

export default NewArrivalsPage;
