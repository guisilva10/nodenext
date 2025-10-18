"use client";

import { PlusIcon } from "lucide-react";
import { memo, useState } from "react";
import { Button } from "@/app/_components/ui/button";

export const AddNodeButton = memo(() => {
  return (
    <Button
      onClick={() => {}}
      variant="outline"
      size="icon"
      className="bg-background"
    >
      <PlusIcon />
    </Button>
  );
});

AddNodeButton.displayName = "AddNodeButton";
