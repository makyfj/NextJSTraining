import React from "react";
import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The blog Post</h1>
    </div>
  );
};

export default BlogPostPage;
