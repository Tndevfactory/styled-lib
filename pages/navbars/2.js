import React from "react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <div>
      <Link href="/" as={`/`}>
        <a>
          <h3>Home</h3>
        </a>
      </Link>
      my navbar
    </div>
  );
};

export default Navbar2;
