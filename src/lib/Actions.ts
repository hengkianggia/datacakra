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
