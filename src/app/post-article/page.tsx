"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Wrapper from "@/components/Wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import { z } from "zod";
import useAppStore from "../../../store";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title tidak boleh kosong" }),
  description: z.string().min(2, { message: "Description tidak boleh kosong" }),
  coverImage: z.string().min(2, { message: "Cover Image tidak boleh kosong" }),
  category: z.string().min(2, { message: "Category tidak boleh kosong" }),
});

const category = [
  {
    id: 3,
    documentId: "ry6927r086nkrpmprmx8is5u",
    name: "Village",
    description: null,
    createdAt: "2024-10-11T08:47:32.977Z",
    updatedAt: "2024-10-11T08:47:32.977Z",
    publishedAt: "2024-10-11T08:47:32.972Z",
    locale: null,
  },
  {
    id: 4,
    documentId: "dd2cdks13pl771xtcwe4xazu",
    name: "Beach",
    description: null,
    createdAt: "2024-10-11T08:49:51.468Z",
    updatedAt: "2024-10-11T08:49:51.468Z",
    publishedAt: "2024-10-11T08:49:51.467Z",
    locale: null,
  },
  {
    id: 5,
    documentId: "kr59qjb372w9n467gtke2xa5",
    name: "Traditional Villages",
    description: null,
    createdAt: "2024-10-12T08:07:02.271Z",
    updatedAt: "2024-10-12T08:07:02.271Z",
    publishedAt: "2024-10-12T08:07:02.269Z",
    locale: null,
  },
  {
    id: 6,
    documentId: "mwlebl62hcpt5xswzkw5i6jj",
    name: "Trekking",
    description: null,
    createdAt: "2024-10-12T08:07:27.849Z",
    updatedAt: "2024-10-12T08:07:27.849Z",
    publishedAt: "2024-10-12T08:07:27.848Z",
    locale: null,
  },
  {
    id: 7,
    documentId: "edsido5qt8c2ubxjg4ettd5y",
    name: "Smart Cities",
    description: null,
    createdAt: "2024-10-12T08:07:38.323Z",
    updatedAt: "2024-10-12T08:07:38.323Z",
    publishedAt: "2024-10-12T08:07:38.321Z",
    locale: null,
  },
];

const PostArticlePage = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      coverImage: "",
      category: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log(values);
    setLoading(false);
  }
  const data = useAppStore((state) => state.data);
  console.log(data);
  return (
    <Wrapper full column itemsCenter>
      <h1 className="text-2xl font-semibold mb-10">POST A NEW ARTICLE</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-xl mx-auto"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Masukkan judul artikel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-52"
                    placeholder="Masukkan deskripsi artikel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link Cover Artikel</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan link cover artikel"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pilih category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        {data?.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={String(category.id)}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full mt-4 bg-myBlue"
            disabled={loading}
          >
            {loading ? (
              <div className="space-x-3 flex items-center">
                <p>Loading...</p>
                <ImSpinner6 className="animate-spin" />
              </div>
            ) : (
              "Buat Artikel"
            )}
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
};

export default PostArticlePage;
