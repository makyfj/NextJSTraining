import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <button>
        <Link href="/">Go Back to homepage</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
