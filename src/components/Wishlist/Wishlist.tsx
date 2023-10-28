import { FC, useContext } from "react";
import { WishContext } from "../../context/WishlistContext";

const WishlistPage: FC = () => {
    const { wish, removeFromWish } = useContext(WishContext);

    return (
        <div>
            <h5>Wishlist</h5>
            {wish.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wish.map((product) => (
                    <>
                        <li key={product.id} className="flex items-center mb-1 text-white">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-20 h-20 object-cover"
                            />
                            {product.artist} - {product.name} - {product.price} €
                            <button onClick={() => removeFromWish(product.id)}>X</button>
                        </li>
                        <hr />
                    </>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default WishlistPage;
