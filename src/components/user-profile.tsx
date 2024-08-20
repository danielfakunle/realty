"use client";

import React from "react";
import { Heart, SignOut, User } from "@phosphor-icons/react/dist/ssr";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { useWindowSize } from "usehooks-ts";
import Link from "next/link";

export default function UserProfile() {
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowSize();
  const { isSignedIn, user, isLoaded } = useUser();

  React.useEffect(() => {
    if (width < 768) {
      setOpen(false);
    }
  }, [width]);

  return (
    isLoaded &&
    isSignedIn &&
    user && (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-8 h-8 hidden md:block">
            <AvatarImage src={user.imageUrl} />
            <AvatarFallback>
              <User className="fill-fg-tertiary" size={24} />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-xl" align="end">
          <DropdownMenuLabel className="py-2.5 px-3 text-sm">
            <p className="font-medium text-text-secondary">{user.fullName}</p>
            <p className="font-normal text-text-tertiary">
              {user.emailAddresses[0].toString()}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/profile">
            <DropdownMenuItem className="flex items-center gap-x-2">
              <User className="fill-fg-secondary" weight="bold" size={16} />
              <span className="text-text-secondary">View Profile</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="flex items-center gap-x-2">
            <Heart className="fill-fg-secondary" weight="bold" size={16} />
            <span className="text-text-secondary">Saved Properties</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <SignOutButton>
            <DropdownMenuItem className="flex items-center gap-x-2">
              <SignOut className="fill-fg-secondary" weight="bold" size={16} />
              <span className="text-text-secondary">Sign out</span>
            </DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
