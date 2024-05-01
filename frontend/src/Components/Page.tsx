import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Page({ children }: Props) {
  return <div className="py-5 px-20 bg-primary">{children}</div>;
}

export default Page;
