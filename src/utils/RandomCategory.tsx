import React from 'react';
import { useCategorizedData, Product } from '../utils/dataUtils';
import { Link } from 'react-router-dom';

const RandomCategory: React.FC = () => {
  const { categorizedData } = useCategorizedData();

  const renderCarousel = (products: Product[], category: string) => {
    const limitedProducts = products.slice(0, 5);
    return (
      <div className="flex space-x-4 overflow-x-scroll">
        {limitedProducts.map((product) => (
          <div key={product.id}>
          <Link to={`/${category}`}>
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
            </Link>
        </div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">New Arrivals</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel(categorizedData['New Arrivals'], 'NewArrivals')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Classics</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel(categorizedData['Classics'], 'Classics')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Sales</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel(categorizedData['Sales'], 'Sales')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Best Sellers</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel(categorizedData['Best Sellers'], 'BestSellers')}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-yellow-500">Back in Catalogue</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel(categorizedData['Back in Catalogue'], 'BackCatalogue')}
        </div>
      </div>
    </div>
  );
};

export default RandomCategory;
