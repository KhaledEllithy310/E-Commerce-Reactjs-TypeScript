import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  label: string;
  type: string;
}
const Input = ({ id, label, name, type, ...rest }: IInputProps) => {
  return (
    <section key={id} className="space-y-2">
      <input
        name={name}
        id={id}
        type={type}
        placeholder={label}
        className="block w-full rounded-md border border-gray-400 py-1 px-2   shadow-sm  placeholder:text-gray-400 focus:outline-2 outline-primary  sm:text-sm sm:leading-6"
        {...rest}
      />
    </section>
  );
};

export default Input;
