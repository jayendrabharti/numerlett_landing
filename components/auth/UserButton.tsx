"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { Loader2Icon, LockIcon, UserRoundCogIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import GoogleButton from "./GoogleButton";

export default function UserButton({ className = "" }: { className?: string }) {
  const { status, data: session } = useSession();

  const user = session?.user as User;

  if (status == "loading")
    return <Loader2Icon className={cn("animate-spin", className)} />;

  if (status == "unauthenticated") return <GoogleButton />;

  const initials = user?.name
    ? user.name.slice(0, 2).toUpperCase()
    : user?.email?.slice(0, 2).toUpperCase();

  if (user) {
    return (
      <div className={cn("flex items-center", className)}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={user.image ?? undefined} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="z-200 w-72">
            <DropdownMenuSeparator />

            {/* User Info */}
            <div className="space-y-2 px-3 py-2 text-center">
              {user?.name && (
                <span className="text-foreground block font-medium">
                  {user.name}
                </span>
              )}
              <Separator />
              {user?.email && (
                <span className="text-muted-foreground block text-xs">
                  {user.email}
                </span>
              )}
              {user?.phone && (
                <span className="text-muted-foreground block text-xs">
                  {user.phone}
                </span>
              )}
            </div>

            <DropdownMenuSeparator />

            <div className="flex flex-col gap-2 p-1">
              {/* <Link href="/profile" prefetch={true}>
                <Button
                  variant={"outline"}
                  className="mx-auto flex w-full items-center justify-start"
                >
                  <UserRoundCogIcon />
                  Profile Settings
                </Button>
              </Link>

              {user.isAdmin && (
                <Link href={`/admin`} prefetch={true}>
                  <Button
                    variant={"outline"}
                    className="mx-auto flex w-full items-center justify-start"
                  >
                    <LockIcon />
                    Admin Dashboard
                  </Button>
                </Link>
              )} */}

              <SignOutButton className="mx-auto flex w-full items-center justify-start" />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
}
