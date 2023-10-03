import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../utils/API';

const NewArrivalsPage: React.FC = () => {
  const {products} = useContext(ProductContext)

  const renderNewArrivals = () => {
    const newArrivals = products.filter((product) => product.category === 'New Arrivals');

    return (
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">New Arrivals</h2>
        <div className="flex flex-wrap justify-center">
          {newArrivals && newArrivals.map((product) => (
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

  return <div className="py-4">{renderNewArrivals()}</div>;
};

export default NewArrivalsPage;
