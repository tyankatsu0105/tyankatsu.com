import NextLink from "next/link";
import { ComponentProps } from "react";
import styles from "./link.module.css";

type Props = ComponentProps<typeof NextLink> & {
  className?: string;
};

export const Link = ({ className, ...props }: Props) => {
  return (
    <NextLink {...props} className={`${styles.link} ${className ?? ""}`} />
  );
};
