import { LoginForm } from "@/features/auth/components/login-form";
import { requiredUnAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requiredUnAuth();
  return <LoginForm />;
};

export default Page;
