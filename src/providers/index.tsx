import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export default function Providers({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider> {children}</ClerkProvider>
    </ThemeProvider>
  );
}
