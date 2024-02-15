import { useParams } from "react-router-dom";
import { IProduct } from "../interfaces";
import { products } from "../helpers/Data";
import { useEffect, useState } from "react";
import { addToCart } from "../RTK/features/Cart/CartSlice";
import { useSelector } from "react-redux";
import { authSelector } from "../RTK/features/Auth/Auth";
import { useAppDispatch } from "../RTK/Store";
import { notify } from "../helpers/Functions";
import { FavoriteBorder } from "@mui/icons-material";
import Button from "../Components/Ui/Button";
import { addToWishList } from "../RTK/features/WishList/WishListSlice";

// interface IProps {
//   product: IProduct;
// }
const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useSelector(authSelector);
  const [product, setProduct] = useState({} as IProduct);
  useEffect(() => {
    if (productId) {
      const targetProduct = products.find((item) => item.id == +productId);
      setProduct(targetProduct || ({} as IProduct));
    }
  }, [productId]);
  return (
    <section>
      <section className="">
        <section className="container my-[100px] grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <section className="h-[200px] md:max-h-[400px]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full  object-contain"
            />
          </section>
          <section>
            {/* Start Description card */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-background">
                {product.title}
              </h1>
              <p className="text-lg font-bold text-background">
                {product.price} $
              </p>
              <p> {product.description}</p>
            </div>
            {/* End Description card */}

            {/* Start Actions card */}
            <section className="flex justify-start pt-[14px] pb-2 gap-3">
              <Button
                classes="bg-primary text-white py-1 px-10 shadow-md hover:shadow-lg"
                onClick={() => {
                  if (isLoggedIn) dispatch(addToCart(product));
                  else notify("error", "Please login");
                }}
              >
                Add to cart
              </Button>
              <Button
                classes="bg-white text-black py-1 px-2 shadow-xl hover:shadow-lg  rounded-[12px] border-2"
                onClick={() => {
                  if (isLoggedIn) dispatch(addToWishList(product));
                  else notify("error", "Please login");
                }}
              >
                <FavoriteBorder fontSize="medium" />
              </Button>
            </section>
            {/* End Actions card */}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProductDetails;
