import type { ReactFlowInstance } from "@xyflow/react";
import { atom } from "jotai";

export const editoAtom = atom<ReactFlowInstance | null>(null);
