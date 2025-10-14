import { SignUpForm } from "@/features/auth/components/register-form";
import { requiredUnAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requiredUnAuth();
  return <SignUpForm />;
};

export default Page;
