import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Seo = ({ title }) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
