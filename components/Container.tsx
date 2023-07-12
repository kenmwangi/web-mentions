import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-7xl mx-auto px-4 lg:px-0">{children}</div>;
};

export default Container;
