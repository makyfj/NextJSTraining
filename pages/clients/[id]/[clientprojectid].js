import React from "react";
import { useRouter } from "next/router";

const ClientProjectIdPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>Client Project Id Page</h1>
    </div>
  );
};

export default ClientProjectIdPage;
