import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  customStyle?: string;
};

function Title({ children, customStyle }: Props) {
  const defaultStyle = "text-primary lg:text-9xl text-5xl flex w-auto";

  return <h1 className={`${defaultStyle} ${customStyle}`}>{children}</h1>;
}

export default Title;
