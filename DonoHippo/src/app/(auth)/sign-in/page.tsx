"use client";
import DefaultPageLayout from "@/components/DefaultPageLayout";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/types/generalTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });
  const test = process.env.DATABASE_URL;
  console.log(test);
  return (
    <DefaultPageLayout>
      <form className="min-w-96 max-w-xl mx-auto my-20 flex flex-col gap-2.5 items-center bg-slate-100 px-5 py-8 rounded-lg overflow-hidden">
        <h2 className="opacity-70">
          Sign in to your account
        </h2>
        <div className="flex items-center gap-1">
          <p>Don't have an account with us?</p>
          <Link
            className="flex items-center gap-1"
            href={"/sign-up"}
          >
            <b className="text-sm">Sign Up</b>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <TextField
          {...register("email")}
          variant="outlined"
          label="Email"
          type="email"
          fullWidth
          error={errors.email ? true : false}
          helperText={
            errors.email ? errors.email.message : undefined
          }
        />
        <TextField
          {...register("password")}
          variant="outlined"
          label="Password"
          type="password"
          fullWidth
          error={errors.password ? true : false}
          helperText={
            errors.password
              ? errors.password.message
              : undefined
          }
        />
        <Button type="submit" variant="contained" fullWidth>
          Sign In
        </Button>
      </form>
    </DefaultPageLayout>
  );
};

export default page;
