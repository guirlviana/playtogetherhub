import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Page({ children }: Props) {
  return <div className="py-5 px-20 bg-secondary absolute w-full h-full">{children}</div>;
}

export default Page;
