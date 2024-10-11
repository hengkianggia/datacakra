"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { ImSpinner6 } from "react-icons/im";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Login } from "@/lib/Actions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z.string().min(2, { message: "Password tidak boleh kosong" }),
});

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const login = Login(values.email, values.password);
    login.then((res: unknown) => {
      if (
        typeof res === "object" &&
        res !== null &&
        "jwt" in res &&
        typeof res.jwt === "string"
      ) {
        Cookies.set("jwt", res.jwt, { expires: 30 });
        router.push("/");
        form.reset();
        setLoading(false);
      }
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-full max-w-md shadow-lg p-6 py-10 rounded-md"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-4 bg-myBlue" disabled={loading}>
            {loading ? (
              <div className="space-x-3 flex items-center">
                <p>Loading...</p>
                <ImSpinner6 className="animate-spin"/>
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default LoginForm;
