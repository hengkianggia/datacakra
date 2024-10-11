import Div from "@/components/Div";
import ListArticle from "@/components/ListArticle";
import Wrapper from "@/components/Wrapper";
import { getArticle } from "@/lib/Actions";
import { cookies } from "next/headers";
import React from "react";

const ArticlePage = async () => {
  const cookieStore = cookies();
  const jwtToken = cookieStore.get("jwt")?.value ?? "";
  const article = await getArticle({
    params: { populate: "*" },
    token: jwtToken,
  });

  return (
    <Div full className="min-h-screen">
      <Wrapper full grid className="gap-4 grid-cols-3">
        {article?.data?.map((item: any) => {
          return (
            <ListArticle
              key={item.documentId}
              link={item.documentId}
              date={item.publishedAt}
              title={item.title}
              image={item.cover_image_url}
            />
          );
        })}
      </Wrapper>
    </Div>
  );
};

export default ArticlePage;
