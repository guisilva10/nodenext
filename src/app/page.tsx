import { requiredAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requiredAuth();
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      protected server component
    </div>
  );
};

export default Page;
