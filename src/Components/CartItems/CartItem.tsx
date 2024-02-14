import { Add, Delete, Remove } from "@mui/icons-material";
import { ICartProduct } from "../../interfaces";
import Button from "../Ui/Button";
import { useAppDispatch } from "../../RTK/Store";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../RTK/features/Cart/CartSlice";

interface IProps {
  product: ICartProduct;
}
const CartItem = ({ product }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <section className=" border-2 gap-4 grid grid-cols-1 sm:grid-cols-4 rounded-md">
      <div className="col-span-1">
        <img
          src={product.image}
          alt="item"
          className="w-full rounded-tl-md rounded-bl-md"
        />
      </div>
      <section className="p-4 col-span-3">
        <h3 className="font-medium text-xl capitalize text-background pb-8">
          {product.title}
        </h3>
        {/* start quantity and price */}
        <section className="flex justify-between w-full">
          {/* Start price */}
          <p className="text-xl text-background font-bold">{product.price} $</p>
          {/* End price */}
          <div className="flex items-center gap-4">
            {/* Start counter */}
            <div className="flex items-center justify-between gap-2 min-h-[34px] border-background border-[.5px] rounded-sm  px-2 font-extrabold text-background">
              <span
                className=" cursor-pointer"
                onClick={() => {
                  dispatch(decreaseQuantity(product.id));
                }}
              >
                <Remove />
              </span>
              <span className="min-w-[25px] text-lg text-center">
                {product.quantity}
              </span>
              <span
                className=" cursor-pointer"
                onClick={() => {
                  dispatch(increaseQuantity(product.id));
                }}
              >
                <Add />
              </span>
            </div>
            {/* End counter */}

            {/* Start remove item */}
            <Button
              className="flex items-center text-lg text-background  border-background border-[.5px] px-1 min-h-[34px] rounded-sm hover:text-sky-700"
              onClick={() => {
                dispatch(removeFromCart(product.id));
              }}
            >
              <Delete />
            </Button>
            {/* End remove item */}
          </div>
        </section>
        {/* End quantity and price*/}
      </section>
    </section>
  );
};
export default CartItem;
