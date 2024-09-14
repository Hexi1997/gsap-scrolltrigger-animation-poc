import { ReactNode } from "react";

interface ITitleProps {
  children: ReactNode;
}
export function Title(props: ITitleProps) {
  const { children } = props;
  return <h2 className="text-lg text-green-400">{children}</h2>;
}
