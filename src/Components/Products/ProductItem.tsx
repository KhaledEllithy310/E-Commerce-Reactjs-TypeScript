import { AddShoppingCart, Delete, FavoriteBorder } from "@mui/icons-material";
import Button from "../Ui/Button";
import "./ProductItem.css";
import { useAppDispatch } from "../../RTK/Store";
import {
  addToCart,
  addToCartFromWish,
  cartSelector,
} from "../../RTK/features/Cart/CartSlice";
import { IProduct } from "../../interfaces";
import { useSelector } from "react-redux";
import { authSelector } from "../../RTK/features/Auth/Auth";
import { findCartItemById, notify } from "../../helpers/Functions";
import { NavLink, useNavigate } from "react-router-dom";
import {
  addToWishList,
  removeFromWishList,
} from "../../RTK/features/WishList/WishListSlice";

interface IProps {
  product: IProduct;
  isWishPage?: boolean;
}
export default function ProductItem({ product, isWishPage = false }: IProps) {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useSelector(authSelector);
  const { cartItems } = useSelector(cartSelector);
  const Navigate = useNavigate();

  const handleAddToCart = (product: IProduct) => {
    if (isLoggedIn) {
      if (isWishPage) {
        dispatch(addToCartFromWish(product));
        const targetItem = findCartItemById(cartItems, product.id);
        if (targetItem === undefined) dispatch(removeFromWishList(product.id));
      } else dispatch(addToCart(product));
    } else notify("error", "Please login");
  };
  return (
    <section className="bg-accent2 rounded-lg card-product relative">
      {/* Start img card */}
      <div
        className="img-card-container rounded-lg overflow-hidden cursor-pointer h-[250px]"
        onClick={() => Navigate(`/productDetails/${product.id}`)}
      >
        <NavLink to={`/productDetails/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full"
          />
        </NavLink>{" "}
      </div>{" "}
      {/* End img card */}
      <section className="px-4 py-2">
        {/* Start Description card */}
        <div className="space-y-2">
          <h2
            className="font-semibold text-xl capitalize"
            title={product.title}
          >
            {product.title.slice(0, 12)}...
          </h2>
          <p className="text-xl text-background font-bold">{product.price} $</p>
        </div>
        {/* End Description card */}
        {/* Start Actions card */}
        <section className="flex justify-end pt-[14px] pb-2">
          <Button
            classes="bg-primary text-white py-1 px-10 shadow-md hover:shadow-lg"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            <AddShoppingCart fontSize="medium" />
          </Button>
          {!isWishPage && (
            <Button
              classes="bg-white text-black py-1 px-2 shadow-md hover:shadow-lg absolute right-3 top-3 z-10 rounded-[12px]"
              onClick={() => {
                if (isLoggedIn) dispatch(addToWishList(product));
                else notify("error", "Please login");
              }}
            >
              <FavoriteBorder fontSize="medium" />
            </Button>
          )}
          {isWishPage && (
            <Button
              classes="bg-white text-black py-1 px-2 shadow-md hover:shadow-lg absolute right-3 top-3 z-10 rounded-[12px]"
              onClick={() => {
                if (isLoggedIn) dispatch(removeFromWishList(product.id));
                else notify("error", "Please login");
              }}
            >
              <Delete fontSize="medium" />
            </Button>
          )}
        </section>
        {/* End Actions card */}
      </section>
    </section>
  );
}
