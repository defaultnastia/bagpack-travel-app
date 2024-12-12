import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="px-10 w-screen h-screen">{children}</div>;
};

export default Container;
