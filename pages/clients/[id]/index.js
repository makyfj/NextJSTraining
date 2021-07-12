import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  const loadProjectHandler = () => {
    // loads data
    // different form instead of using string to push
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "franklin", clientprojectid: "project-a" },
    });
  };
  return (
    <div>
      <h1>Client project page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
