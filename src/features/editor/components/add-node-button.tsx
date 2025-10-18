"use client";

import { PlusIcon } from "lucide-react";
import { memo, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { NodeSelector } from "@/app/_components/node-selector";

export const AddNodeButton = memo(() => {
  const [selectorOpen, setSelectorOpen] = useState(false);
  return (
    <NodeSelector onOpenChange={setSelectorOpen} open={selectorOpen}>
      <Button
        onClick={() => {}}
        variant="outline"
        size="icon"
        className="bg-background"
      >
        <PlusIcon />
      </Button>
    </NodeSelector>
  );
});

AddNodeButton.displayName = "AddNodeButton";
