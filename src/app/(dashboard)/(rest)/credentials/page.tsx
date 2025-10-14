import { requiredAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requiredAuth();
  return <div>Credentials</div>;
};

export default Page;
