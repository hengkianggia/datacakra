import Div from "@/components/Div";
import ListArticle from "@/components/ListArticle";
import Wrapper from "@/components/Wrapper";
// import { cookies } from "next/headers";
import React from "react";

const ArticlePage = () => {
  // const cookieStore = cookies();
  // cookieStore.get("jwt");
  // console.log(cookieStore.get("jwt"));
  return (
    <Div full className="min-h-screen">
      <Wrapper full grid className="gap-4 grid-cols-3">
        <ListArticle />
        <ListArticle />
        <ListArticle />
      </Wrapper>
    </Div>
  );
};

export default ArticlePage;
