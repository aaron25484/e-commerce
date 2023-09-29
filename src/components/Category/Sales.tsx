import { useCategorizedData, Product } from '../../utils/categorizer';

const SalesPage: React.FC = () => {
  const { categorizedData } = useCategorizedData();

  const sales = categorizedData['Sales'];

  const renderSales = (products: Product[]) => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">Sales</h2>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id} className="flex-col items-center m-4">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto hover:scale-110 transition-transform duration-300 transform origin-center" />
              <p className="mt-2 text-center text-yellow-500">{product.name}</p>
              <p className="mt-1 text-center text-yellow-200">{product.artist}</p>
              <p className="mt-1 text-center text-yellow-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="py-4">
      {renderSales(sales)}
    </div>
  );
};

export default SalesPage;
