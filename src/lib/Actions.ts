import { get, post } from "./Api";

export const Login = async (email: string, password: string) => {
  const res = await post("/api/auth/local", {
    identifier: email,
    password: password,
  });
  return res;
};

export const getArticle = async (params: Record<string, unknown> = {}) => {
  const res = await get("/api/articles", params);
  return res;
};
