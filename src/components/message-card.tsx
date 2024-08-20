import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Copy } from "@phosphor-icons/react/dist/ssr";

export default function MessageCard() {
  return (
    <Card className="shadow-xs p-4 flex flex-col gap-y-3">
      <div className="flex gap-x-4 justify-between">
        <div>
          <p className="text-base md:text-lg font-medium text-text-primary">
            Andi Lane
          </p>
          <p className="text-text-secondary text-sm md:text-base text-wrap">
            Property Inquiry: Rusty Cabin in the Woods
          </p>
        </div>
        <p className="text-text-tertiary text-xs md:text-sm">
          Oct 22, 2023, 9:00:00 AM
        </p>
      </div>
      <p className="text-text-quaternary text-sm md:text-base">
        I’m interested in this property
      </p>
      <div className="flex flex-wrap gap-1.5">
        <Button variant="outline" className="gap-x-1.5">
          <Copy size={16} />
          <span>Copy Email</span>
        </Button>
        <Button variant="outline">Mark as Read</Button>
        <Button variant="error">Delete</Button>
      </div>
    </Card>
  );
}
