import { ReactNode } from "react";
import styles from "./container.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>{children}</div>
  );
};
