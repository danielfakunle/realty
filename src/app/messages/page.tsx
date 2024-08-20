import MessageCard from "@/components/message-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function Messages() {
  return (
    <main className="px-4 md:px-10 lg:px-16 xl:px-20 mx-auto pt-6 md:pt-8 pb-8 md:pb-12 flex justify-center gap-4 md:gap-6 min-h-dvh">
      <div className="flex-1 max-w-256 space-y-6">
        <h1 className="text-display-xs font-medium">Your Messages</h1>
        <div className="flex flex-col gap-y-4">
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>
    </main>
  );
}
