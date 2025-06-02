import "./globals.css";
import styles from "./page_layout.module.css";

export function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <div className={styles["main-inside"]}>
        <div className={styles["main-content"]}>{children}</div>
      </div>
    </main>
  );
}
