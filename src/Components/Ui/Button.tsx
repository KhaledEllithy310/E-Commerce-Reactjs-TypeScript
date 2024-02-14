import { ButtonHTMLAttributes, ReactNode } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
  children?: ReactNode;
}
const Button = ({ children, classes, ...rest }: IProps) => {
  return (
    <button className={` ${classes} rounded-lg capitalize`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
