import CartItems from "../Components/CartItems/CartItems";
import Footer from "../Components/Ui/Footer";
import MainTitle from "../Components/Ui/MainTitle";

const Cart = () => {
  return (
    <div className="min-h-screen">
      <MainTitle title="Cart" color="text-background" />
      <CartItems />
      <Footer />
    </div>
  );
};

export default Cart;
