import React from "react";
interface IProps {
  title: string;
  classes?: string;
}
const Button = ({ title, classes }: IProps) => {
  return (
    <button className={` ${classes} rounded-md capitalize`}>{title}</button>
  );
};

export default Button;
