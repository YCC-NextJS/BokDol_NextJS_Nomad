import { useRouter } from "next/router";
import React from "react";
import Seo from "../Seo";

const Detail = ({ params }) => {
  const router = useRouter();
  console.log(params);
  const [title, id] = params;
  return (
    <>
      <Seo title={title} />
      <div>{title}</div>
      <img src={router.query.image} />
    </>
  );
};

export default Detail;

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
