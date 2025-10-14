import { requiredAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{ workflowId: string }>;
}

const Page = async ({ params }: PageProps) => {
  await requiredAuth();
  const { workflowId } = await params;
  return <div>Workflow Id: {workflowId}</div>;
};

export default Page;
