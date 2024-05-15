import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "default";
  size: "small" | "medium";
};

function Button({ children, variant, size }: Props) {
  const variants = {
    default: "py-2 px-4 bg-primary hover:bg-primary-700 text-white rounded-lg",
  };
  const sizes = {
    small: "w-24 h-12",
    medium: "w-48 h-20",
  };

  const combinedStyles = `${variants[variant]} ${sizes[size]}`;

  return <button className={combinedStyles}>{children}</button>;
}

export default Button;
