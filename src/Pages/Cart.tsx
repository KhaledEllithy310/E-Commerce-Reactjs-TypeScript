import CartItems from "../Components/CartItems/CartItems";
import FormOrder from "../Components/FormOrder/FormOrder";
import Footer from "../Components/Ui/Footer";
import MainTitle from "../Components/Ui/MainTitle";

const Cart = () => {
  return (
    <div className="min-h-screen">
      <MainTitle title="Cart" color="text-background" />
      <CartItems />
      <FormOrder />
      <Footer />
    </div>
  );
};

export default Cart;
