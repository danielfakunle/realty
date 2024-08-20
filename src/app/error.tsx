"use client";
import React from "react";

export default function Error() {
  return (
    <main className="flex-1 flex flex-col gap-y-8 justify-center items-center min-h-dvh">
      <div className="text-center max-w-lg space-y-6">
        <div className="space-y-2">
          <p className="text-fg-brand-primary font-medium">500 error</p>
          <h1 className="text-display-xl font-medium">Something went wrong</h1>
        </div>
        <p>We are working hard to resolve this issue.</p>
      </div>
    </main>
  );
}
