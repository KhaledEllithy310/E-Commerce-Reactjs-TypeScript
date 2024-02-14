import { products } from "../../helpers/Data";
import MainTitle from "../Ui/MainTitle";
import ProductItem from "./ProductItem";

export default function Products() {
  const renderProductList = products.map((item) => {
    return <ProductItem key={item.id} product={item} />;
  });
  return (
    <section className="container">
      <MainTitle title="products" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-9 gap-6 ">
        {/* <ProductItem /> */}
        {renderProductList}
      </section>
    </section>
  );
}
