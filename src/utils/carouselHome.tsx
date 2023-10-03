import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './API';

const Category: React.FC = () => {

  const {products} = useContext(ProductContext)

  const renderCarousel = (category: string) => {
    const categoryProducts = products.filter((product) => product.category === category);
    const limitedProducts = categoryProducts.slice(0, 5);
    return (
      <div className="flex space-x-4 overflow-x-scroll">
        {limitedProducts && limitedProducts.map((product) => (
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
          {renderCarousel('New Arrivals')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Classics</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('Classics')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Sales</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('Sales')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Best Sellers</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('Best Sellers')}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-yellow-500">Back to Catalogue</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('Back to Catalogue')}
        </div>
      </div>
    </div>
  );
};

export default Category;
