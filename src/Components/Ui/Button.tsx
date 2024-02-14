import React, { ReactNode } from "react";
interface IProps {
  classes?: string;
  children?: ReactNode;
}
const Button = ({ children, classes }: IProps) => {
  return (
    <button className={` ${classes} rounded-lg capitalize`}>{children}</button>
  );
};

export default Button;
