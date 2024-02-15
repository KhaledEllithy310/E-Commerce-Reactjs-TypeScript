import CartItems from "../Components/CartItems/CartItems";
import FormOrder from "../Components/FormOrder/FormOrder";
import MainTitle from "../Components/Ui/MainTitle";
import { useSelector } from "react-redux";
import { orderSelector } from "../RTK/features/Order/OrderSlice";
import OrderDone from "../Components/Ui/OrderDone";

const Cart = () => {
  const { isFormShowed } = useSelector(orderSelector);
  const { isOrderDone } = useSelector(orderSelector);

  return (
    <div className="min-h-[400px]">
      {!isOrderDone ? (
        <>
          <MainTitle title="Cart" color="text-background" />
          <CartItems />
          {isFormShowed && <FormOrder />}
        </>
      ) : (
        <OrderDone />
      )}
    </div>
  );
};

export default Cart;
