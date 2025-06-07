import { ReactNode } from "react";
import styles from "./heading.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({ children, className, tag = "h1" }: Props) => {
  const Tag = tag;
  return (
    <Tag className={`${styles.heading} ${className ?? ""}`}>
      <span className={styles.heading__text}>{children}</span>
    </Tag>
  );
};
