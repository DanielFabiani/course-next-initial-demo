import { FC, PropsWithChildren } from "react";

import Head from "next/head";

import styles from "./MainLayout.module.css";
import NavBar from "../NavBar/NavBar";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Daniel Dev</title>
        <meta
          name="description"
          content="Contact Page"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
