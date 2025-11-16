import AdminBottomBar from "@/components/admin/AdminBottomBar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSideBar from "@/components/admin/AdminSideBar";
import Unauthenticated from "@/components/auth/Unauthenticated";
import Main from "@/components/Main";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/utils/authOptions";
import { BanIcon, HomeIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user as User | undefined;

  return (
    <Main className="bg-background text-foreground grid h-dvh min-h-dvh w-full grid-rows-[auto_1fr]">
      <div className="flex min-h-screen flex-row">
        <AdminSideBar className="hidden md:block" />
        <div className="flex flex-1 flex-col">
          <AdminHeader />
          <div className="flex w-full flex-1 flex-col gap-3 overflow-y-scroll p-3 pb-20 md:pb-3">
            {!user ? (
              <Unauthenticated />
            ) : user.isAdmin ? (
              children
            ) : (
              <NotAdminWarning />
            )}
          </div>
          <AdminBottomBar className="block md:hidden" />
        </div>
      </div>
    </Main>
  );
}

const NotAdminWarning = () => (
  <div className="text-destructive mx-auto flex h-full w-full flex-col items-center justify-center gap-4 p-4 text-center">
    <BanIcon className="size-20" />
    <span className="mx-auto text-3xl font-extrabold">Access Denied</span>
    <p className="text-center">
      You do not have permission to access this page.
      <br />
      This page is restricted to admins only.
    </p>
    <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-center">
      <Link href="/">
        <Button>
          <HomeIcon />
          Home Page
        </Button>
      </Link>
      {/* <Link href="/profile">
        <Button>
          <UserCircle2Icon />
          Your Profile
        </Button>
      </Link> */}
    </div>
  </div>
);
