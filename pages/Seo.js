import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Paths = {
  "/": "Main",
  "/about": "About",
};

const Seo = () => {
  const router = useRouter();

  return (
    <Head>
      <title>{Paths[router.pathname]} | Next Movies</title>
    </Head>
  );
};

export default Seo;
