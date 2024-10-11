import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { convertDateFormat } from "@/lib/helper";
import Link from "next/link";

const ListArticle = ({
  image,
  title,
  date,
  link,
}: {
  image: string;
  title: string;
  date: string;
  link: string;
}) => {
  return (
    <Link href={`/article/${link}`}>
      <Card className="rounded-none cursor-pointer">
        <CardHeader className="p-2">
          <Image
            src={image}
            alt="image"
            width={400}
            height={400}
            className="aspect-16/10 object-cover object-center shadow-md"
          />
        </CardHeader>
        <CardContent className="mt-2 space-y-2 pb-2">
          <h3 className="font-semibold line-clamp-2 leading-snug text-lg">
            {title}
          </h3>
          <p className="text-gray-400">{convertDateFormat(date)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListArticle;
