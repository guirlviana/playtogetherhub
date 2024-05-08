import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  customStyle?: string;
};

function Title({ children, customStyle }: Props) {
  const defaultStyle =
    "text-primary flex w-auto lg:text-8xl md:text-6xl text-3xl";
  const combinedStyles = customStyle
    ? `${defaultStyle} ${customStyle}`
    : defaultStyle;

  return <h1 className={combinedStyles}>{children}</h1>;
}

export default Title;
