import { requiredAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requiredAuth();
  return <div>Executions</div>;
};

export default Page;
