import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, Product } from '../../utils/API';

const BackCataloguePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProductsData();
  }, []);

  const renderBackCatalogue = () => {
    const backCatalogue = products.filter((product) => product.category === 'Back to Catalogue');

    return (
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">Back in Catalogue</h2>
        <div className="flex flex-wrap justify-center">
          {backCatalogue.map((product) => (
            <div key={product.id} className="flex-col items-center m-4">
              <Link to={`/${product.category}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mx-auto hover:scale-110 transition-transform duration-300 transform origin-center"
                />
              </Link>
              <p className="mt-2 text-center text-yellow-500">{product.name}</p>
              <p className="mt-1 text-center text-yellow-200">{product.artist}</p>
              <p className="mt-1 text-center text-yellow-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="py-4">{renderBackCatalogue()}</div>;
};

export default BackCataloguePage;
