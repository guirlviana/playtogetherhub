import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  customStyle?: string;
};

function Page({ children, customStyle }: Props) {
  const defaultStyle = "lg:py-5 lg:px-40 p-5 bg-secondary absolute w-full";
  const combinedStyles = customStyle
    ? `${defaultStyle} ${customStyle}`
    : defaultStyle;

  return <div className={combinedStyles}>{children}</div>;
}

export default Page;
