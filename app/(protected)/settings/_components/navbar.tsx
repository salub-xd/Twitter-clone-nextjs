"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-4 rounded-xl shadow-sm w-[350px] sm:w-[400px] lg:w-[600px] ">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">
            Settings
          </Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings/account" ? "default" : "outline"}
        >
          <Link href="/settings/account">
            Account
          </Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};