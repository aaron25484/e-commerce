import SearchBar from '../components/SearchBar/SearchBar';
import Carrousel from '../utils/carouselHome';
import Cart from '../components/Cart/Cart';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        
        const modalTimeout = setTimeout(() => {
            setIsModalOpen(true);
        }, 10000); 

        return () => {
            clearTimeout(modalTimeout);
        };
    }, []);

    return (
        <>
            <SearchBar />
            <Carrousel />
            <Cart isOpen={isCartOpen} onClose={handleCloseCart}/>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <img src="src/assets/img/Er Selula.jpeg" alt="Modal Image" />
                        <p>ER SELULA feat. Saiano</p>
                        <p>Including:</p>
                        <ol>
                            <li>"No me toques las bolas (de dragón)"</li>
                            <li>"Las bragas de Ulong"</li>
                            <li>"De farra por Namek"</li>
                            <li>"Te pego</li>
                            <li>"Tú me kamehameameas"</li>
                        </ol>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomePage;
