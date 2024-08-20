"use client";

import React, { PropsWithChildren, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { List, User } from "@phosphor-icons/react";
import { Button, buttonVariants } from "./ui/button";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import Divider from "./divider";
import { useMediaQuery } from "usehooks-ts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";

export default function MobileMenu() {
  const ref = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const isTablet = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();
  const { isSignedIn, isLoaded, user } = useUser();
  useEffect(() => {
    isTablet && setOpen(false);
  }, [isTablet]);
  return (
    isLoaded && (
      <Sheet open={open} onOpenChange={setOpen} modal={false}>
        <SheetTrigger asChild className="md:hidden">
          <div>
            <SignedOut>
              <Button
                variant="ghost"
                size="icon"
                className={cn({ "dark:bg-bg-primary-solid": pathname === "/" })}
              >
                <List size={24} className="fill-fg-tertiary" />
              </Button>
            </SignedOut>
            <SignedIn>
              <div
                className={cn(
                  "flex gap-x-1.5 items-center py-1 px-1.5 border border-border-secondary rounded-full bg-white shadow-xs",
                  { "dark:border-utility-gray-700": pathname === "/" },
                )}
              >
                <Avatar className="w-[1.625rem] h-[1.625rem]">
                  <AvatarImage src={user?.imageUrl} />
                  <AvatarFallback
                    className={cn({ "dark:bg-text-primary": pathname === "/" })}
                  >
                    <User
                      className={cn("fill-fg-tertiary", {
                        "dark:fill-utility-gray-600": pathname === "/",
                      })}
                      size={20}
                    />
                  </AvatarFallback>
                </Avatar>
                <List size={20} />
              </div>
            </SignedIn>
          </div>
        </SheetTrigger>
        <SheetContent
          ref={ref}
          side="top"
          className="shadow p-0 md:hidden z-40 absolute top-0 inset-x-0"
        >
          <div className="h-[4.78125rem]"></div>
          <nav className="py-4">
            <SignedIn>
              {user && (
                <div className="py-3 px-4 text-base w-full justify-start">
                  <p className="text-lg font-medium text-text-primary">
                    {user.fullName}
                  </p>
                  <p className="text-text-secondary">
                    {user.emailAddresses[0].toString()}
                  </p>
                </div>
              )}
            </SignedIn>
            <MobileMenuLink href="#">Properties</MobileMenuLink>
            <SignedIn>
              <MobileMenuLink href="#">Add property</MobileMenuLink>
              <MobileMenuLink href="#">Saved properties</MobileMenuLink>
            </SignedIn>
          </nav>
          <Divider />
          <div className="py-6 px-4 space-y-8">
            <nav className="grid grid-cols-2 gap-6 ">
              <div className="flex flex-col gap-y-3">
                <MobileMenuSubLink>About</MobileMenuSubLink>
                <MobileMenuSubLink>Press</MobileMenuSubLink>
                <MobileMenuSubLink>Careers</MobileMenuSubLink>
              </div>
              <div className="flex flex-col gap-y-3">
                <MobileMenuSubLink>Support</MobileMenuSubLink>
                <MobileMenuSubLink>Contact</MobileMenuSubLink>
                <MobileMenuSubLink>Legal</MobileMenuSubLink>
              </div>
            </nav>
            <div className="flex flex-col gap-y-3">
              <SignedOut>
                <SignUpButton>
                  <Button variant="default" size="lg">
                    Sign up
                  </Button>
                </SignUpButton>
                <SignInButton>
                  <Button variant="outline" size="lg">
                    Log in
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <SignOutButton>
                  <Button variant="default" size="lg">
                    Sign out
                  </Button>
                </SignOutButton>
              </SignedIn>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  );
}

type MobileMenuLinkProps = PropsWithChildren<LinkProps>;

function MobileMenuLink({ href, children }: MobileMenuLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "link", size: "link" }),
        "py-3 px-4 text-base w-full justify-start text-text-secondary",
      )}
    >
      {children}
    </Link>
  );
}

function MobileMenuSubLink({ children }: { children: string }) {
  return (
    <Link
      href="#"
      className={cn(
        buttonVariants({ variant: "link", size: "link" }),
        "text-base justify-start text-text-quaternary",
      )}
    >
      {children}
    </Link>
  );
}
