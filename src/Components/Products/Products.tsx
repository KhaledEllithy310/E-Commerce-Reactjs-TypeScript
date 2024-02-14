import MainTitle from "../Ui/MainTitle";
import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <section className="container">
      <MainTitle title="products" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-9 gap-6 ">
        {/* <ProductItem /> */}
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </section>
    </section>
  );
}
