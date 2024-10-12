import { get, post } from "./Api";

export const Login = async (email: string, password: string) => {
  const res = await post("/api/auth/local", {
    identifier: email,
    password: password,
  });
  return res;
};

export const getArticle = async ({
  params = {},
  token,
}: {
  params?: Record<string, unknown>;
  token: string;
}) => {
  const res = await get("/api/articles", params, token);
  return res;
};

export const getDetailArticle = async ({
  params,
  token,
}: {
  params?: Record<string, unknown>;
  token: string;
}) => {
  const id = params?.id as string;
  const res = await get(`/api/articles/${id}`, {}, token);
  return res;
};

export const getCommentByArticle = async ({ token }: { token: string }) => {
  const res = await get(`/api/comments/`, {}, token);
  return res;
};

export const getListCategory = async ({ token }: { token: string }) => {
  const res = await get("/api/categories", {}, token);
  return res;
};
