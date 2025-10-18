"use client";

import { createId } from "@paralleldrive/cuid2";
import { useReactFlow } from "@xyflow/react";
import { GlobeIcon, MousePointerIcon } from "lucide-react";
import { useCallback } from "react";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { NodeType } from "@/generated/prisma";
import { Separator } from "./ui/separator";

export type NodeTypeOptions = {
  type: NodeType;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }> | string;
};

const triggerNodes: NodeTypeOptions[] = [
  {
    type: NodeType.MANUAL_TRIGGER,
    label: "Trigger manually",
    description:
      "Runs the flow onn clicking a button. Good  for getting started quickly ",
    icon: MousePointerIcon,
  },
];
const executionNodes: NodeTypeOptions[] = [
  {
    type: NodeType.HTTP_REQUEST,
    label: "HTTP Request",
    description: "Make as HTTP request ",
    icon: GlobeIcon,
  },
];

interface NodeSelectionPros {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function NodeSelector({
  open,
  onOpenChange,
  children,
}: NodeSelectionPros) {
  const { setNodes, getNodes, screenToFlowPosition } = useReactFlow();

  const handleNodeSelect = useCallback(
    (selection: NodeTypeOptions) => {
      if (selection.type === NodeType.MANUAL_TRIGGER) {
        const nodes = getNodes();
        const hasManualTrigger = nodes.some(
          (node) => node.type === NodeType.MANUAL_TRIGGER,
        );
        if (hasManualTrigger) {
          toast.error("Only one manual trigger is allowed  per workflow");
          return;
        }
      }

      setNodes((nodes) => {
        const hasInitialTrigger = nodes.some(
          (node) => node.type === NodeType.INITIAL,
        );

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const flowPosition = screenToFlowPosition({
          x: centerX + (Math.random() - 0.5) * 200,
          y: centerY + (Math.random() - 0.5) * 200,
        });

        const newNode = {
          id: createId(),
          data: {},
          position: flowPosition,
          type: selection.type,
        };

        if (hasInitialTrigger) {
          return [newNode];
        }

        return [...nodes, newNode];
      });

      onOpenChange(false);
    },
    [setNodes, getNodes, screenToFlowPosition, onOpenChange],
  );
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>What triggers this workflow ?</SheetTitle>
          <SheetDescription>
            A trigger is a step that starts your workflow
          </SheetDescription>
        </SheetHeader>
        <div>
          {triggerNodes.map((nodeType) => {
            const Icon = nodeType.icon;

            return (
              <div
                key={nodeType.type}
                className="hover:border-l-primary h-auto w-full cursor-pointer justify-start rounded-none border-l-2 border-transparent px-4 py-5"
                onClick={() => handleNodeSelect(nodeType)}
              >
                <div className="flex w-full items-center gap-6 overflow-hidden">
                  {typeof Icon === "string" ? (
                    <img
                      src={Icon}
                      alt={nodeType.label}
                      className="size-5 rounded-md object-contain"
                    />
                  ) : (
                    <Icon className="size-5" />
                  )}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium">
                      {nodeType.label}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {nodeType.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Separator />
        <div>
          {executionNodes.map((nodeType) => {
            const Icon = nodeType.icon;

            return (
              <div
                key={nodeType.type}
                className="hover:border-l-primary h-auto w-full cursor-pointer justify-start rounded-none border-l-2 border-transparent px-4 py-5"
                onClick={() => handleNodeSelect(nodeType)}
              >
                <div className="flex w-full items-center gap-6 overflow-hidden">
                  {typeof Icon === "string" ? (
                    <img
                      src={Icon}
                      alt={nodeType.label}
                      className="size-5 rounded-md object-contain"
                    />
                  ) : (
                    <Icon className="size-5" />
                  )}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium">
                      {nodeType.label}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {nodeType.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
