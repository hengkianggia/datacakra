// api.ts
import axios, { AxiosInstance, AxiosResponse } from "axios";

const clientHttp: AxiosInstance = axios.create({
  baseURL: "https://extra-brooke-yeremiadio-46b2183e.koyeb.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async <T>(
  url: string,
  params: Record<string, unknown> = {},
  token?: string
): Promise<T> => {
  const headers = token
    ? { Authorization: `Bearer ${token}` } // Set Authorization header jika token ada
    : {};

  const response: AxiosResponse<T> = await clientHttp.get(url, {
    params,
    headers, // Masukkan header di sini
  });

  return response.data;
};

export const post = async <T>(
  url: string,
  data: Record<string, unknown> = {},
  token?: string // Tambahkan parameter opsional untuk token
): Promise<T> => {
  const headers = token
    ? { Authorization: `Bearer ${token}` } // Set Authorization header jika token ada
    : {};

  const response: AxiosResponse<T> = await clientHttp.post(url, data, {
    headers, // Masukkan header di sini
  });

  return response.data;
};

export const put = async <T>(
  url: string,
  data: Record<string, unknown> = {},
  token?: string // Tambahkan parameter opsional untuk token
): Promise<T> => {
  const headers = token
    ? { Authorization: `Bearer ${token}` } // Set Authorization header jika token ada
    : {};

  const response: AxiosResponse<T> = await clientHttp.put(url, data, {
    headers, // Masukkan header di sini
  });

  return response.data;
};


export const del = async <T>(
  url: string,
  token?: string // Tambahkan parameter opsional untuk token
): Promise<T> => {
  const headers = token
    ? { Authorization: `Bearer ${token}` } // Set Authorization header jika token ada
    : {};

  const response: AxiosResponse<T> = await clientHttp.delete(url, {
    headers, // Masukkan header di sini
  });

  return response.data;
};
