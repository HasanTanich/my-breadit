import Link from "next/link";
import { Icons } from "./Icons";
import UserAuthForm from "./ui/UserAuthForm";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="w-6 h-6 mx-auto" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="max-w-xs mx-auto text-sm">
          By continuing, you are setting up a breadit account and agree to our
          User Agreement and Policy.
        </p>

        {/* sign in form */}
        <UserAuthForm />

        <p className="px-8 text-sm text-center text-zinc-700">
          New to Breadit?{" "}
          <Link
            href="/sign-up"
            className="text-sm underline hover:text-zinc-400 underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
