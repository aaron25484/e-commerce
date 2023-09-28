import { useCategorizedData, Product } from '../../utils/dataUtils';

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
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto" />
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
      {renderSales(sales)}
    </div>
  );
};

export default SalesPage;
