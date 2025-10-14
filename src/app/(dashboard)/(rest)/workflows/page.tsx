import { requiredAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requiredAuth();
  return <div>Wokflows</div>;
};

export default Page;
