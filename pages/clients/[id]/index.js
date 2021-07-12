import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  return (
    <div>
      <h1>Client project page</h1>
    </div>
  );
};

export default ClientProjectPage;
