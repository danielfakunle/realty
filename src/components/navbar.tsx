import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import MobileMenu from "./mobile-menu";
import NavbarStyling from "./navbar-styling";
import DynamicNavbarLogo from "./dynamic-navbar-logo";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import UserProfile from "./user-profile";
import AddPropertyForm from "./add-property-form";

export default function Navbar() {
  return (
    <NavbarStyling>
      <header className="relative bg-bg-primary dark:bg-utility-gray-50 border-b border-border-secondary md:px-4 lg:px-8 xl:px-12 z-50 flex justify-center items-center">
        <div className="flex justify-between items-center py-5 lg:py-6 px-4 md:px-6 lg:px-8 flex-1 max-w-[84rem]">
          <nav className="flex items-center space-x-12">
            <DynamicNavbarLogo />
            <div className="hidden md:block space-x-8">
              <Link
                className={buttonVariants({ variant: "link", size: "link" })}
                href="/properties"
              >
                Properties
              </Link>
              <SignedIn>
                <AddPropertyForm />
              </SignedIn>
            </div>
          </nav>
          <MobileMenu />
          <div className="hidden space-x-2 md:block">
            <SignedOut>
              <SignUpButton>
                <Button>Sign up</Button>
              </SignUpButton>
              <SignInButton>
                <Button
                  className="dark:bg-bg-white dark:text-utility-gray-300 dark:border-utility-gray-700 dark:hover:bg-text-primary"
                  variant="outline"
                >
                  Log in
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
          <SignedIn>
            <UserProfile />
          </SignedIn>
        </div>
      </header>
    </NavbarStyling>
  );
}
