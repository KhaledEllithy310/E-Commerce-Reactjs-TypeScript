import { orderDoneImg } from "../../helpers/Data";

const OrderDone = () => {
  return (
    <section className="flex flex-col justify-center bg-neutral-200 items-center w-1/2 mx-auto rounded-lg mt-24 mb-12 pt-10 space-y-6">
      <h2 className="text-background font-bold text-xl">
        Your order is on its way{" "}
      </h2>
      <p className="text-background text-xl">
        Thank you for contacting with us
      </p>
      <img src={orderDoneImg} alt="order done" className="w-1/2" />
    </section>
  );
};
export default OrderDone;
