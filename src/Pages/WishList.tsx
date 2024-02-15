import { useSelector } from "react-redux";
import { wishListSelector } from "../RTK/features/WishList/WishListSlice";
import ProductItem from "../Components/Products/ProductItem";

const WishList = () => {
  const { wishListItems } = useSelector(wishListSelector);
  const renderWishListItems = wishListItems.map((item) => {
    return <ProductItem key={item.id} product={item} isWishPage={true} />;
  });

  return (
    <section>
      {wishListItems.length > 0 ? (
        <section className="container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-9 gap-6 ">
          {renderWishListItems}
        </section>
      ) : (
        <h1 className="min-h-[400px] flex items-center text-3xl text-center font-bold text-background">
          No products in wish list
        </h1>
      )}
    </section>
  );
};

export default WishList;
