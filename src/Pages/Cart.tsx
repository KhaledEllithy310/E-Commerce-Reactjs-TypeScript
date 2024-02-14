import CartItems from "../Components/CartItems/CartItems";
import FormOrder from "../Components/FormOrder/FormOrder";
import Footer from "../Components/Ui/Footer";
import MainTitle from "../Components/Ui/MainTitle";
import { useSelector } from "react-redux";
import { orderSelector } from "../RTK/features/Order/OrderSlice";
import OrderDone from "../Components/Ui/OrderDone";

const Cart = () => {
  const { isFormShowed } = useSelector(orderSelector);
  const { isOrderDone } = useSelector(orderSelector);

  return (
    <div className="min-h-screen">
      {!isOrderDone ? (
        <>
          <MainTitle title="Cart" color="text-background" />
          <CartItems />
          {isFormShowed && <FormOrder />}
        </>
      ) : (
        <OrderDone />
      )}
      <Footer />
    </div>
  );
};

export default Cart;
