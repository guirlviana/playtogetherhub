import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "default";
};

function Button({ children, variant }: Props) {
  const variants = {
    default: "py-2 px-4 bg-primary hover:bg-primary-700 text-white rounded-lg",
  };
  return <button className={variants[variant]}>{children}</button>;
}

export default Button;
