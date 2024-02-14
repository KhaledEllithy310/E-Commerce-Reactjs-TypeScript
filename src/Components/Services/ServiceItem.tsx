interface IProps {
  icon: string;
  description: string;
}

const ServiceItem = ({ icon, description }: IProps) => {
  return (
    <section className="flex space-x-3 items-center justify-center ">
      <img src={icon} alt={`service ${description}`} className="w-8" />
      <span className="text-white capitalize">{description}</span>
    </section>
  );
};

export default ServiceItem;
