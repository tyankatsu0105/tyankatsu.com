// import { draftMode } from "next/headers";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";
// import { getAllPosts } from "@/lib/api";
export const metadata: Metadata = {
  title: "tyankatsu.com",
  description:
    "フロントエンドエンジニアのtyankatsuの取り組んでいることや考察や技術を紹介するサイトです。",
};
export default async function Home() {
  // const { isEnabled } = await draftMode();
  // const allPosts = await getAllPosts(isEnabled);

  return (
    <>
      <section className={styles["section"]}>
        <h2 className={styles["section-title"]}>Work</h2>

        <ul className={styles["section__list"]}>
          <li className={styles["section__list-item"]}>
            Front-end Engineer: Linc'well - (December 2022 - Present)
          </li>
          <li className={styles["section__list-item"]}>
            Front-end Engineer: HRBrain - (July 2020 - October 2022)
          </li>
          <li className={styles["section__list-item"]}>
            Front-end Engineer: VEGA corporation - (July 2018 - June 2020)
          </li>
          <li className={styles["section__list-item"]}>
            Web Designer: Japanese company - (2016 - June 2018)
          </li>
        </ul>
      </section>

      <section className={styles["section"]}>
        <h2 className={styles["section-title"]}>Internet</h2>

        <ul className={styles["section__list"]}>
          <li className={styles["section__list-item"]}>
            <Link
              href="https://x.com/tyankatsu5"
              target="_blank"
              className={styles["section__list-item-link"]}
            >
              X
            </Link>
          </li>
          <li className={styles["section__list-item"]}>
            <Link
              href="https://github.com/tyankatsu0105"
              target="_blank"
              className={styles["section__list-item-link"]}
            >
              GitHub
            </Link>
          </li>
          <li className={styles["section__list-item"]}>
            <Link
              href="https://www.npmjs.com/~tyankatsu0105"
              target="_blank"
              className={styles["section__list-item-link"]}
            >
              npm
            </Link>
          </li>
          <li className={styles["section__list-item"]}>
            <Link
              href="https://speakerdeck.com/tyankatsu"
              target="_blank"
              className={styles["section__list-item-link"]}
            >
              Speaker Deck
            </Link>
          </li>
          <li className={styles["section__list-item"]}>
            <Link
              href="https://katsulog.netlify.app/"
              target="_blank"
              className={styles["section__list-item-link"]}
            >
              katsulog
            </Link>
          </li>
        </ul>
      </section>

      <section className={styles["section"]}>
        <h2 className={styles["section-title"]}>Book</h2>

        <ul className={styles["section__list"]}>
          <li className={styles["section__list-item"]}>
            <Link
              href="https://ponday.booth.pm/items/1316963"
              target="_blank"
              className={styles["section__list-item-link"]}
            >
              チームマネジメントとGridsome／VuePress
            </Link>
          </li>
        </ul>
      </section>

      <section className={styles["section"]}>
        <h2 className={styles["section-title"]}>Community</h2>

        <ul className={styles["section__list"]}>
          <li className={styles["section__list-item"]}>
            <Link
              href="https://aniken.connpass.com/"
              target="_blank"
              className={styles["section__list-item-link"]}
            >
              アニメーション研究会
            </Link>
          </li>
          <li className={styles["section__list-item"]}>
            <Link
              href="https://ffs.connpass.com/"
              target="_blank"
              className={styles["section__list-item-link"]}
            >
              Frontend-Fukuoka.spec
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
