import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Title({ children }: Props) {
  return <h1 className="text-primary lg:text-9xl text-5xl flex">{children}</h1>;
}

export default Title;
