import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext} from '../../utils/API';

const SalesPage: React.FC = () => {
  const {products} = useContext(ProductContext)

  const renderSales = () => {
    const sales = products.filter((product) => product.category === 'Sales');

    return (
      <div>
        <h2 className="text-2xl font-slackey font-bold text-yellow-500">Sales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {sales && sales.map((product) => (
            <div key={product.id} className="flex-col fle items-center m-4">
              <Link to={`/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mx-auto hover:scale-110 transition-transform duration-300 transform origin-center"
                />              
                <p className="mt-2 text-center text-yellow-500">{product.name}</p>
                <p className="mt-1 text-center text-yellow-200">{product.artist}</p>
                <p className="mt-1 text-center text-yellow-600">{product.price} €</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="py-4">{renderSales()}</div>;
};

export default SalesPage;
