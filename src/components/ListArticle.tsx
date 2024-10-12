import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { convertDateFormat } from "@/lib/helper";
import Link from "next/link";
import Div from "./Div";

const ListArticle = ({
  image,
  title,
  date,
  link,
  category,
  user,
}: {
  image: string;
  title: string;
  date: string;
  link: string;
  category: string;
  user: string;
}) => {
  return (
    <Link href={`/article/${link}`}>
      <Card className="rounded-none cursor-pointer">
        <CardHeader className="p-2 relative">
          <Image
            src={image}
            alt="image"
            width={400}
            height={400}
            className="aspect-16/10 object-cover object-center shadow-md"
          />
          {category && (
            <Div
              absolute
              className="top-3 left-4 px-2 py-1 bg-gray-200 rounded-md text-black"
            >
              {category}
            </Div>
          )}
        </CardHeader>
        <CardContent className="mt-2 space-y-2 pb-2">
          <h3 className="font-semibold line-clamp-2 leading-snug text-lg">
            {title}
          </h3>
          <Div flex className="space-x-2 text-gray-400">
            <p>{convertDateFormat(date)}</p>
            <p>- by {user}</p>
          </Div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListArticle;
