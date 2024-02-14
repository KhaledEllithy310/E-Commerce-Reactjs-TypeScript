import { useSelector } from "react-redux";
import Button from "../Ui/Button";
import MainTitle from "../Ui/MainTitle";
import { cartSelector } from "../../RTK/features/Cart/CartSlice";
import { calculateCartTotal } from "../../helpers/Functions";
import { useAppDispatch } from "../../RTK/Store";
import { checkout, orderSelector } from "../../RTK/features/Order/OrderSlice";

const OrderSummary = () => {
  const { cartItems } = useSelector(cartSelector);
  const { isFormShowed } = useSelector(orderSelector);
  const dispatch = useAppDispatch();
  const totalCartPrice = calculateCartTotal(cartItems);
  const [tax, delivery] = [24, 16];
  return (
    <section className="border-2 rounded-md px-6 pb-10">
      <MainTitle title="Order Summary" color="text-background" height="py-6" />
      {/* Start order summary */}
      <section className="space-y-3 text-lg border-[#808080] border-b pb-4">
        {/* Start cart total */}
        <div className="flex justify-between items-center capitalize">
          <span>cart total</span>
          <span>{totalCartPrice} $</span>
        </div>
        {/* End cart total */}
        {/* Start tax */}
        <div className="flex justify-between items-center capitalize">
          <span>{tax}</span>
          <span>24 $</span>
        </div>
        {/* End tax */}
        {/* Start delivery */}
        <div className="flex justify-between items-center capitalize">
          <span>{delivery}</span>
          <span>16 $</span>
        </div>
        {/* End delivery */}
      </section>

      {/* Start total */}
      <div className="flex justify-between items-center capitalize py-6">
        <span>total</span>
        <span className="text-background font-bold text-lg">
          {(totalCartPrice + tax + delivery).toFixed(2)} $
        </span>
      </div>
      {/* End total */}
      {/* Start action */}
      <div className="text-center">
        {!isFormShowed && (
          <Button
            classes="py-2 w-2/3 md:w-full lg:w-2/3 bg-primary text-white hover:bg-orange-400 hover:shadow-lg"
            onClick={() => {
              dispatch(checkout());
            }}
          >
            Check out
          </Button>
        )}
      </div>
      {/* End action */}
      {/* End order summary */}
    </section>
  );
};

export default OrderSummary;
