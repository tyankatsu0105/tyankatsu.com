import type { Metadata } from "next";
import {
  Container,
  Heading,
  Link,
  Section,
  SectionContainer,
} from "@/design/base";
import styles from "./page.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tyankatsu.com"),
  title: "About - tyankatsu.com",
  description: "著者紹介ページです。",
};

export default async function About() {
  return (
    <Container>
      <Heading>About</Heading>

      <SectionContainer>
        <Section title="Work">
          <ul className={styles.section__list}>
            <li className={styles["section__list-item"]}>
              Front-end Engineer: Linc&apos;well - (December 2022 - Present)
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
        </Section>

        <Section title="Internet">
          <ul className={styles.section__list}>
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
        </Section>

        <Section title="Book">
          <ul className={styles.section__list}>
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
        </Section>

        <Section title="Community">
          <ul className={styles.section__list}>
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
        </Section>
      </SectionContainer>
    </Container>
  );
}
