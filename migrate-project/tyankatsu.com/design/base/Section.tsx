import { ReactNode } from "react";
import styles from "./section.module.css";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

type SectionProps = {
  children: ReactNode;
  className?: string;
  title: string;
};

export const SectionContainer = ({
  children,
  className,
}: SectionContainerProps) => {
  return (
    <div className={`${styles.sections} ${className ?? ""}`}>{children}</div>
  );
};

export const Section = ({ children, className, title }: SectionProps) => {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <h2 className={styles["section-title"]}>{title}</h2>
      {children}
    </section>
  );
};
