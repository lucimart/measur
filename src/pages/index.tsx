import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Transform } from "@/components/Transform";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Measur</title>
        <meta name="description" content="Transform between different measurements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <header className={styles.header}>
          <h1>Measur</h1>
        </header>
        <main className={styles.main}>
          <Transform />
        </main>
        <footer className={styles.footer}>
         <a href="https://twitter.com/fuegoenfango">Made with <span className={styles.heart}>{"<3"}</span> by Lucía</a>
        </footer>
      </div>
    </>
  );
}
