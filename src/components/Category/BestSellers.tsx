import React from 'react';
import { useCategorizedData, Product } from '../../utils/dataUtils';

const BestSellersPage: React.FC = () => {
  const { categorizedData } = useCategorizedData();

  const bestSellers = categorizedData['Best Sellers'];

  const renderBestSellers = (products: Product[]) => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">Best Sellers</h2>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id} className="flex-col items-center m-4">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto" />
              <p className="mt-2 text-center text-yellow-600">{product.name}</p>
              <p className="mt-1 text-center text-emerald-500">{product.artist}</p>
              <p className="mt-1 text-center text-yellow-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="py-4">
      {renderBestSellers(bestSellers)}
    </div>
  );
};

export default BestSellersPage;
