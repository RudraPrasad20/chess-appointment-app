"use client";
import React from "react";
import axios from "axios";
import { cn } from "@/utils/cn";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  firstname: z.string().max(8).min(1, {
    message: "firstname required.",
  }),
  lastname: z.string().max(8).min(1, {
    message: "lastname required.",
  }),
  email: z.string().email({
    message: "email reqired.",
  }),
  text: z.string().min(5).max(50, {
    message: "max 50 allowed",
  }),
});

export function Shadform() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      text: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await axios.post("/api/submit", values);
    toast.success("Form submitted successfully!");
    console.log("Form submitted");
    form.reset();
    return res.data;
  };
  return (
    <div className="max-w-md w-full mt-10 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Chessy
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Enter to Chessy if you can because we don&apos;t have a login flow yet
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-8">
          <div className="flex flex-col md:flex-row space-y-2 pt-10 md:space-y-0 md:space-x-2 mb-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <Label htmlFor="firstname">First Name</Label>
                    <FormControl>
                      <Input
                        id="firstname"
                        placeholder="Tyler"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </LabelInputContainer>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <Label htmlFor="firstname">Last Name</Label>
                    <FormControl>
                      <Input
                        id="firstname"
                        placeholder="Tyler"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </LabelInputContainer>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                    {...field}
                  />
                  <FormMessage />
                </LabelInputContainer>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="twitterpassword">Write some text</Label>
                  <Textarea {...field} />
                  <FormMessage />
                </LabelInputContainer>
              </FormItem>
            )}
          />
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </Form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
