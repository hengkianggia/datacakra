import { create } from "zustand";

export interface Data {
  id: number;
  documentId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

interface AppState {
  data: Data[];
  token: string;
  addData: (newData: Data) => void;
  addToken: (newToken: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  data: [],
  token: "",
  addData: (newData) =>
    set((state) => ({
      data: [...state.data, newData],
    })),
  addToken: (newToken: string) =>
    set(() => ({
      token: newToken,
    })),
}));

export default useAppStore;
