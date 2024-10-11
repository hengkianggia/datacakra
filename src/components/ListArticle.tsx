import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import dummy from "@/public/images/dummy.jpg";

const ListArticle = () => {
  return (
    <Card className="rounded-none cursor-pointer">
      <CardHeader className="p-2">
        <Image
          src={dummy}
          alt="image"
          width={400}
          height={400}
          className="aspect-16/10 object-cover object-center shadow-md"
        />
      </CardHeader>
      <CardContent className="mt-2">
        <h2 className="font-semibold line-clamp-2 leading-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, incidunt.</h2>
      </CardContent>
    </Card>
  );
};

export default ListArticle;
