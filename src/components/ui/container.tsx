import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12 ${className}`.trim()}
    >
      {children}
    </section>
  );
}
