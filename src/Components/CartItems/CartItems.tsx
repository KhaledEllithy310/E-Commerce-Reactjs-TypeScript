import OrderSummary from "../OrderSummary/OrderSummary";
import CartItem from "./CartItem";

const CartItems = () => {
  return (
    <section className="container py-9">
      <section className="grid grid-cols-1 md:grid-cols-3 space-y-6 md:space-y-0 space-x-0 md:space-x-6 ">
        <section className="col-span-2 grid grid-cols-1 gap-6 ">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
        <section className="col-span-1">
          <OrderSummary />
        </section>
      </section>
    </section>
  );
};
export default CartItems;
