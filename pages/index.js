import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> styled-lib</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1> styled-lib</h1>
        <Link href="/navbars/1" as={`/navbars/1`}>
          <a>
            <h3>navbar1</h3>
          </a>
        </Link>
        <Link href="/navbars/2" as={`/navbars/2`}>
          <a>
            <h3>navbar2</h3>
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Powered by ch {new Date().getFullYear()}</h1>
        </a>
      </footer>
    </div>
  );
}
