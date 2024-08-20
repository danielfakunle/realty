import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col gap-y-8 justify-center items-center min-h-dvh">
      <div className="text-center max-w-md space-y-6">
        <div className="space-y-2">
          <p className="text-fg-brand-primary font-medium">404 error</p>
          <h1 className="text-display-xl font-medium">We lost this page</h1>
        </div>
        <p>
          We searched high and low, but couldn’t find what you’re looking for.
          Let’s find a better place for you to go.
        </p>
      </div>
      <Button size="lg">
        <Link href="/">Go home</Link>
      </Button>
    </main>
  );
}
