import type { Metadata } from "next";
import {
  Container,
  Heading,
  Link,
  ListContainer,
  ListItem,
  Section,
  SectionContainer,
} from "@/design/base";

export const metadata: Metadata = {
  title: "About - tyankatsu.com",
  description: "著者紹介ページです。",
};

export default async function About() {
  return (
    <Container>
      <Heading>About</Heading>

      <SectionContainer>
        <Section title="Work">
          <ListContainer>
            <ListItem>
              Front-end Engineer: Linc&apos;well - (December 2022 - Present)
            </ListItem>
            <ListItem>
              Front-end Engineer: HRBrain - (July 2020 - October 2022)
            </ListItem>
            <ListItem>
              Front-end Engineer: VEGA corporation - (July 2018 - June 2020)
            </ListItem>
            <ListItem>
              Web Designer: Japanese company - (2016 - June 2018)
            </ListItem>
          </ListContainer>
        </Section>

        <Section title="Internet">
          <ListContainer>
            <ListItem>
              <Link href="https://x.com/tyankatsu5" target="_blank">
                X
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/tyankatsu0105" target="_blank">
                GitHub
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.npmjs.com/~tyankatsu0105" target="_blank">
                npm
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://speakerdeck.com/tyankatsu" target="_blank">
                Speaker Deck
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://katsulog.netlify.app/" target="_blank">
                katsulog
              </Link>
            </ListItem>
          </ListContainer>
        </Section>

        <Section title="Book">
          <ListContainer>
            <ListItem>
              <Link
                href="https://ponday.booth.pm/items/1316963"
                target="_blank"
              >
                チームマネジメントとGridsome／VuePress
              </Link>
            </ListItem>
          </ListContainer>
        </Section>

        <Section title="Community">
          <ListContainer>
            <ListItem>
              <Link href="https://aniken.connpass.com/" target="_blank">
                アニメーション研究会
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://ffs.connpass.com/" target="_blank">
                Frontend-Fukuoka.spec
              </Link>
            </ListItem>
          </ListContainer>
        </Section>
      </SectionContainer>
    </Container>
  );
}
