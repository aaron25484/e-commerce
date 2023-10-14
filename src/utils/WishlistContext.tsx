import { useReducer } from "react";

    const Wishlist = () => {
        const initialState = {
        wishlist: [],
        };

        const wishlistReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_WISHLIST":
            return { wishlist: [...state.wishlist, action.item] };

            case "REMOVE_FROM_WISHLIST":
            return { wishlist: state.wishlist.filter(item => item.id !== action.itemId) };

            case "CLEAR_WISHLIST":
            return { wishlist: [] };

            default:
            return state;
        }
        };

        const [state, dispatch] = useReducer(wishlistReducer, initialState);
        const { wishlist } = state;

        const addItemToWishlist = (item) => {
        dispatch({ type: "ADD_TO_WISHLIST", item });
        };

        const removeItemFromWishlist = (itemId) => {
        dispatch({ type: "REMOVE_FROM_WISHLIST", itemId });
        };

        const clearWishlist = () => {
        dispatch({ type: "CLEAR_WISHLIST" });
        };
    
        return (
            <div>
              <h1>Wishlist</h1>
              <ul>
                {wishlist.map(item => (
                  <li key={item.id}>
                    {item.name}
                    <button onClick={() => removeItemFromWishlist(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <button onClick={clearWishlist}>Clear Wishlist</button>
            </div>
          );
    }
    export default Wishlist;

