import { IInputsAttribute, ISlider } from "../interfaces";
import logoCompany from "/images/logo.png";
import img1 from "/images/slider1.jpg";

// icons Services
import service1 from "/images/services/service1.png";
import service2 from "/images/services/service2.png";
import service3 from "/images/services/service3.png";
import service4 from "/images/services/service4.png";

export const logo = logoCompany;
export const itemsSlider: ISlider[] = [
  {
    name: "find the new collection in this winter season",
    description:
      "New seasonal new style only you in our collection. Fall in love with up to 70% off in Winter collection",
    img: img1,
  },
  {
    name: "new collection with modern style",
    description:
      "New seasonal new style only you in our collection. Fall in love with up to 70% off in Winter collection",
    img: img1,
  },
  {
    name: "Find The Best Fashion Style For You",
    description:
      "Browse from around thousands of outfits, makeup and more! We've something for everyone.",
    img: img1,
  },
];

export const serviceData = [
  {
    icon: service1,
    description: "lorem",
  },
  {
    icon: service2,
    description: "lorem",
  },
  {
    icon: service3,
    description: "lorem",
  },
  {
    icon: service4,
    description: "lorem",
  },
];

export const formOrderInputs: IInputsAttribute[] = [
  {
    name: "name",
    id: "name",
    label: "full name",
    type: "text",
  },
  {
    name: "phone",
    id: "phone",
    label: "phone number",
    type: "text",
  },
  {
    name: "address",
    id: "address",
    label: "address",
    type: "text",
  },
];
