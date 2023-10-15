import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../utils/API';

const BackCataloguePage: React.FC = () => {
  const {products} = useContext(ProductContext)

  const renderBackCatalogue = () => {
    const backCatalogue = products.filter((product) => product.category === 'Back to Catalogue');

    return (
      <div>
        <h2 className="text-2xl font-slackey font-bold text-yellow-500">Back in Catalogue</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {backCatalogue && backCatalogue.map((product) => (
            <div key={product.id} className="flex-col items-center m-4">
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

  return <div className="py-4">{renderBackCatalogue()}</div>;
};

export default BackCataloguePage;
