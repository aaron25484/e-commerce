import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './API';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Category: React.FC = () => {

  const {products} = useContext(ProductContext)

  const renderCarousel = (category: string) => {
    const categoryProducts = products.filter((product) => product.category === category);
    const limitedProducts = categoryProducts.slice(0, 5);
    return (
      <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop interval={3000}>
        {limitedProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/${category}`}>
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
            </Link>
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <div className="py-4">
      <div className="mb-4">
        <h2 className="text-2xl font-slackey font-bold text-yellow-500 mb-2">New Arrivals</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('New Arrivals')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-slackey font-bold text-yellow-500 mb-2">Classics</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('Classics')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-slackey font-bold text-yellow-500 mb-2">Sales</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('Sales')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-slackey font-bold text-yellow-500 mb-2">Best Sellers</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('Best Sellers')}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-slackey font-bold text-yellow-500 mb-2">Back to Catalogue</h2>
        <div className="flex space-x-4 justify-center">
          {renderCarousel('Back to Catalogue')}
        </div>
      </div>
    </div>
  );
};

export default Category;
