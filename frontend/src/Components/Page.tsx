import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Page({ children }: Props) {
  return <div className="lg:py-5 lg:px-40 p-5 bg-secondary absolute w-full h-full">{children}</div>;
}

export default Page;
