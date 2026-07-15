import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-content px-6 tablet:px-12 desktop:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
