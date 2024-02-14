export interface ISlider {
  name: string;
  description: string;
  img: string;
}

export interface IInputsAttribute {
  name: keyof IFormFields;
  id: string;
  label: string;
  type: string;
}

export interface IFormFields {
  name: string;
  phone: string;
  address: string;
}
