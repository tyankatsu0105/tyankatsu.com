// import { draftMode } from "next/headers";
import styles from "./page.module.css";

// import { getAllPosts } from "@/lib/api";

export default async function Home() {
  // const { isEnabled } = await draftMode();
  // const allPosts = await getAllPosts(isEnabled);

  return <h1 className={styles.title}>tyankatsu</h1>;
}
