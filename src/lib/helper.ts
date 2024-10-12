import { cookies } from "next/headers";

export function convertDateFormat(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export const getCookies = () => {
  const cookieStore = cookies();
  const jwtToken = cookieStore.get("jwt")?.value ?? "";
  return jwtToken;
};

export function convertDateFormatComment(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
