// import {
//   AccessTimeFilled,
//   AirportShuttle,
//   Percent,
//   VolunteerActivism,
// } from "@mui/icons-material";
import ServiceItem from "./ServiceItem";
import { serviceData } from "../../helpers/Data";

const Services = () => {
  return (
    <section className="bg-background grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center py-5">
      {serviceData.map((service, index) => (
        <ServiceItem
          key={index}
          icon={service.icon}
          description={service.description}
        />
      ))}
    </section>
  );
};

export default Services;
