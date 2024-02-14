export interface ISlider {
  name: string;
  description: string;
  img: string;
}

export interface IInputsOrderAttribute {
  name: keyof IFormOrderFields;
  id: string;
  label: string;
  type: string;
}

export interface IFormOrderFields {
  name: string;
  phone: string;
  address: string;
}
export interface IFormLoginField {
  email: string;
  password: string;
}

export interface IInputsLoginAttribute {
  name: keyof IFormLoginField;
  id: string;
  label: string;
  type: string;
}

export interface ICartProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}
export interface IProduct extends Omit<ICartProduct, "quantity"> {}
