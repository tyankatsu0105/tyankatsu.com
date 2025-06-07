import { ReactNode } from "react";
import styles from "./content.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Content = ({ children, className }: Props) => {
  return (
    <div className={`${styles.content} ${className ?? ""}`}>{children}</div>
  );
};
