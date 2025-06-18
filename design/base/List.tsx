import { ReactNode } from "react";
import styles from "./list-container.module.css";

type ListContainerProps = {
  children: ReactNode;
  className?: string;
};

type ListItemProps = {
  children: ReactNode;
  className?: string;
};

export const ListContainer = ({ children, className }: ListContainerProps) => {
  return (
    <ul className={`${styles["list-container"]} ${className ?? ""}`}>
      {children}
    </ul>
  );
};

export const ListItem = ({ children, className }: ListItemProps) => {
  return (
    <li className={`${styles["list-item"]} ${className ?? ""}`}>{children}</li>
  );
};
