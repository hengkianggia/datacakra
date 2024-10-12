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

const formSchema = z.object({
  title: z.string().min(2, { message: "Title tidak boleh kosong" }),
  description: z.string().min(2, { message: "Description tidak boleh kosong" }),
  coverImage: z.string().min(2, { message: "Cover Image tidak boleh kosong" }),
  category: z.string().min(2, { message: "Category tidak boleh kosong" }),
});

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
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
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
