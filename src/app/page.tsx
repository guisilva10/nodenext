"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const { data: users } = useQuery(trpc.getUsers.queryOptions());
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {JSON.stringify(users)}
    </div>
  );
};

export default Page;
