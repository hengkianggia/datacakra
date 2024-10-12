import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import { getCommentByArticle, getDetailArticle } from "@/lib/Actions";
import {
  convertDateFormat,
  convertDateFormatComment,
  getCookies,
} from "@/lib/helper";
import Image from "next/image";
import React from "react";

const DetailArticle = async ({ params }: { params: { id: string } }) => {
  const jwtToken = getCookies();

  const result = await getDetailArticle({
    params: { id: params.id },
    token: jwtToken,
  });

  let thisComment = [];
  const comment = await getCommentByArticle({
    token: jwtToken,
  });

  const article = result?.data;
  const idArticle = article.id;

  const comments = comment?.data;

  for (const comment of comments) {
    if (comment.id === idArticle) {
      thisComment.push(comment);
      break;
    }
  }

  console.log(thisComment);
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Wrapper full column itemsCenter className="gap-6 px-32">
      <Div full className="space-y-2">
        <Image
          src={article.cover_image_url}
          width={1000}
          height={400}
          alt={article.title}
          className="w-full aspect-video object-cover object-center bg-gray-200"
        />
        <p className="text-2xl text-gray-400">
          {convertDateFormat(article.publishedAt)}
        </p>
      </Div>

      <Div full className="space-y-2">
        <h1 className="text-2xl font-semibold">{article.title}</h1>
        <p>{article.description}</p>
      </Div>

      <Div full column className="gap-5">
        <h2 className="text-2xl">Comment</h2>

        {thisComment.map((comment: any) => {
          return (
            <Div column full key={comment.id}>
              <Div flex itemsCenter className="gap-3">
                <div className="w-8 h-8 rounded-full bg-myBlue"></div>
                <p>{comment.content}</p>
                <p>{convertDateFormatComment(comment.createdAt)}</p>
              </Div>
            </Div>
          );
        })}

        {thisComment.length === 0 && (
          <p className="text-gray-400">No comment yet</p>
        )}
      </Div>
    </Wrapper>
  );
};

export default DetailArticle;
