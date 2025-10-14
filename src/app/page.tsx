"use client";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./_components/ui/button";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
      },
    }),
  );
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      protected server component
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button onClick={() => create.mutate()}>Create Workflow</Button>
    </div>
  );
};

export default Page;
