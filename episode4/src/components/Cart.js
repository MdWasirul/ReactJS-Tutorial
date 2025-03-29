import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 border border-red-600 ">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItem.length == 0 && (
          <h1>Your Cart is empty. Add items to Cart </h1>
        )}

        <button
          className="px-2 py-2 bg-gray-600 text-white rounded-lg"
          onClick={handleClick}
        >
          Clear Cart
        </button>
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
