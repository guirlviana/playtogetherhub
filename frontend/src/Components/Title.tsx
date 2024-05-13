import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  customStyle?: string;
};

function Title({ children, customStyle }: Props) {
  const defaultStyle =
    "text-primary flex w-auto lg:text-8xl md:text-6xl sm:text-6xl text-4xl";
  const combinedStyles = customStyle
    ? `${defaultStyle} ${customStyle}`
    : defaultStyle;

  return (
    <a href="/">
      <h1 className={combinedStyles}>{children}</h1>
    </a>
  );
}

export default Title;
