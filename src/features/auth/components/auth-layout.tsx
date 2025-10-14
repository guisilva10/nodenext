import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full flex-col gap-6 lg:max-w-lg">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src="/logo.svg" width={30} height={30} alt="NodeNext" />
          Node Next
        </Link>
        {children}
      </div>
    </div>
  );
};
