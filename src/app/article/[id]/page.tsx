import React from "react";

const DetailArticle = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default DetailArticle;
