import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Product } from "../../utils/API";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredProducts);
    setShowResults(true);
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);

    setShowResults(inputValue.length >= 3);

    if (inputValue.length >= 3) {
      handleSearch();
    }
  };

  return (
    <div className="relative mt-4">
      <input
        type="text"
        placeholder="Find your record!"
        value={searchQuery}
        onChange={handleInputChange}
        className="border p-1 rounded-lg w-64"
      />

      {showResults && searchResults.length > 0 && (
        <div className="absolute w-64 mt-2 bg-white border rounded-lg shadow-lg z-50 text-left">
          <ul className="list-none">
            {searchResults.map((result) => (
              <Link to={`/${result.id}`}>
                <li
                  key={result.id}
                  className="p-2 border-b cursor-pointer hover:bg-gray-100 flex items-center"
                >
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-10 h-10 mr-2"
                  />
                  <div>
                    <p className="text-sm font-semibold">{result.artist}</p>
                    <p className="text-xs">{result.name}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
