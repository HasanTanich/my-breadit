import SignUp from "@/components/SignUp";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getAuthSession();

  if (session?.user) {
    return redirect("/");
  }

  return (
    <div className="absolute inset-0 bg-slate-200">
      <div className="flex flex-col items-center justify-center h-full max-w-2xl gap-20 mx-auto">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20"
          )}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Home
        </Link>

        <SignUp />
      </div>
    </div>
  );
};

export default page;
