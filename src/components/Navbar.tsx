"use client";
import React from "react";
import Div from "./Div";
import Wrapper from "./Wrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import useAppStore from "../../store";

const Navbar = ({ token, category }: { token: string; category: any }) => {
  const addToken = useAppStore((state) => state.addToken);
  const addData = useAppStore((state) => state.addData);
  addToken(token);
  for (const cate of category) {
    console.log(cate);
    addData(cate);
  }

  return (
    <Wrapper full>
      <Div
        full
        flex
        between
        className="py-8 border-b border-gray-400"
        as={"header"}
      >
        <Div className="w-20">logo</Div>
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
