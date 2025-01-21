import React, { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

export const AnimatedBg: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="wrapper flex flex-col p-16 h-full">
      <div className="flex text-center">
        <div>{children}</div>
      </div>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
