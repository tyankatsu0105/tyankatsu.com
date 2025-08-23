"use client";

import { useState } from "react";
import "./globals.css";
import styles from "./page_layout.module.css";
import Link from "next/link";
import Image from "next/image";

const GlobalNav = () => {
  const [isOpenGlobalNav, setIsOpenGlobalNav] = useState(false);

  const handleCloseNav = () => {
    setIsOpenGlobalNav(false);
  };

  const handleToggleNav = () => {
    setIsOpenGlobalNav((prev) => !prev);
  };

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["social-links"]}>
          <Link
            href="https://twitter.com/yourprofile"
            className={styles["social-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/social-x.svg" alt="Twitter" width={20} height={20} />
          </Link>
          <Link
            href="https://b.hatena.ne.jp/entry/"
            className={styles["social-link"]}
            target="_blank"
            rel="noopener noreferrer"
            data-hatena-bookmark-layout="touch"
          >
            <Image
              src="/social-hatena.png"
              alt="はてなブックマーク"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <button
          type="button"
          className={styles["global-nav__trigger"]}
          onClick={handleToggleNav}
        >
          {isOpenGlobalNav ? "CLOSE" : "OPEN"} MENU
        </button>
      </header>

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
