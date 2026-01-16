"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function GoogleButton({
  className = "",
  text = "Continue with Google",
}: {
  className?: string;
  text?: string;
}) {
  const handleGoogleLogin = async () => {
    await signIn("google");
  };

  return (
    <Button
      variant={"outline"}
      type={"button"}
      className={className}
      onClick={handleGoogleLogin}
    >
      <FcGoogle />
      {text}
    </Button>
  );
}
