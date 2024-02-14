import { useSelector } from "react-redux";
import OrderSummary from "../OrderSummary/OrderSummary";
import CartItem from "./CartItem";
import { cartSelector, clearCart } from "../../RTK/features/Cart/CartSlice";
import Button from "../Ui/Button";
import { useAppDispatch } from "../../RTK/Store";

const CartItems = () => {
  const { cartItems } = useSelector(cartSelector);

  const dispatch = useAppDispatch();

  const renderCartItems = cartItems.map((item) => {
    return <CartItem key={item.id} product={item} />;
  });

  return (
    <section className="container py-9">
      {cartItems.length > 0 ? (
        <>
          <Button
            classes="py-2 px-8 bg-background text-white hover:bg-sky-800 hover:shadow-lg mb-6"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </Button>
          <section className="grid grid-cols-1 md:grid-cols-3 space-y-6 md:space-y-0 space-x-0 md:space-x-6 ">
            <section className="col-span-2 grid grid-cols-1 gap-6 ">
              {renderCartItems}
            </section>
            <section className="col-span-1">
              <OrderSummary />
            </section>
          </section>
        </>
      ) : (
        <h2 className="text-center text-2xl font-bold text-background">
          Your cart is empty
        </h2>
      )}
    </section>
  );
};
export default CartItems;
