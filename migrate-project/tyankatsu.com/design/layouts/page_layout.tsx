"use client";

import { useState } from "react";
import "./globals.css";
import styles from "./page_layout.module.css";
import Link from "next/link";

const GlobalNav = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const handleCloseNav = () => {
    setIsOpenNav(false);
  };
  const handleOpenNav = () => {
    setIsOpenNav(true);
  };

  const handleToggleNav = () => {
    setIsOpenNav((prev) => !prev);
  };
  return (
    <>
      <header>
        <button
          type="button"
          className={styles["global-nav__trigger"]}
          onClick={handleToggleNav}
        >
          {isOpenNav ? "CLOSE" : "OPEN"} MENU
        </button>
      </header>

      {isOpenNav && (
        <nav>
          <div>
            <button
              type="button"
              className={styles["global-nav__close-trigger"]}
              onClick={handleCloseNav}
            >
              a
            </button>
          </div>

          <ul className={styles["global-nav__list"]}>
            <li className={styles["global-nav__list-item"]}>
              <Link
                onNavigate={handleCloseNav}
                href={{
                  pathname: "/",
                }}
              >
                Home
              </Link>
            </li>

            <li className={styles["global-nav__list-item"]}>
              <Link
                onNavigate={handleCloseNav}
                href={{
                  pathname: "/about",
                }}
              >
                About
              </Link>
            </li>

            <li className={styles["global-nav__list-item"]}>
              <Link
                onNavigate={handleCloseNav}
                href={{
                  pathname: "/posts",
                }}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles["main-inside"]}>
          <GlobalNav />
          <div className={styles["noise-line"]} />
          <main className={styles["main-content"]}>{children}</main>
        </div>
      </div>
    </>
  );
}
