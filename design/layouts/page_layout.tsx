"use client";

import { useState } from "react";
import "./globals.css";
import styles from "./page_layout.module.css";
import Link from "next/link";
import Image from "next/image";

const GlobalNav = () => {
  const [isOpenGlobalNav, setIsOpenGlobalNav] = useState(false);
  const [isOpenSNSNav, setIsOpenSNSNav] = useState(false);
  const handleCloseNav = () => {
    setIsOpenGlobalNav(false);
  };

  const handleToggleNav = () => {
    setIsOpenGlobalNav((prev) => !prev);
    handleCloseSNSNav();
  };

  const handleCloseSNSNav = () => {
    setIsOpenSNSNav(false);
  };

  const handleToggleSNSNav = () => {
    setIsOpenSNSNav((prev) => !prev);
  };

  return (
    <>
      <header className={styles["header"]}>
        <button
          type="button"
          className={styles["sns-nav__trigger"]}
          onClick={handleToggleSNSNav}
        >
          <Image src="/sns.svg" alt="" width={25} height={25} />
        </button>
        <button
          type="button"
          className={styles["global-nav__trigger"]}
          onClick={handleToggleNav}
        >
          {isOpenGlobalNav ? "CLOSE" : "OPEN"} MENU
        </button>
      </header>

      {isOpenSNSNav && (
        <nav className={styles["sns-nav"]}>
          <ul className={styles["sns-nav__list"]}>
            <li className={styles["sns-nav__list-item"]}>
              <Link
                className={styles["sns-nav__list-item-link"]}
                onNavigate={handleCloseSNSNav}
                href={{
                  pathname: "https://twitter.com/yourprofile",
                }}
              >
                Twitter
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {isOpenGlobalNav && (
        <nav className={styles["global-nav"]}>
          <ul className={styles["global-nav__list"]}>
            <li className={styles["global-nav__list-item"]}>
              <Link
                className={styles["global-nav__list-item-link"]}
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
                className={styles["global-nav__list-item-link"]}
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
                className={styles["global-nav__list-item-link"]}
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
