import React from "react";
import Div from "./Div";
import Wrapper from "./Wrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <Wrapper full>
      <Div
        full
        flex
        between
        className="py-8 border-b border-gray-400"
        as={"header"}
      >
        <Div>logo</Div>
        <Link href={"/post-article"}>
          <Button className="bg-myBlue hover:bg-myBlue hover:scale-105 transition-transform">
            Post New Article
          </Button>
        </Link>
      </Div>
    </Wrapper>
  );
};

export default Navbar;
