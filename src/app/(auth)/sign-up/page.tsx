import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";

function SignInPage() {
  return (
    <>
      <h1 className={"text-center font-bold text-5xl tracking-tight mt-20"}>
        Join lnk.
      </h1>
      <p className={"font-medium text-center"}>Sign up for free</p>
      <form className={"mt-8 flex flex-col gap-y-1"}>
        <Input placeholder={"Email"} type={"email"} required={true} />
        <Input placeholder={"Password"} type={"password"} required={true} />
        <Button className={"w-full mt-2"}>Sign In</Button>
      </form>
      <p className={"text-sm text-stone-400 text-center mt-6"}>
        By clicking Create account, you agree to lnk&#39;s privacy notice, T&Cs
        and to receive offers, news and updates.
      </p>
      <p className={"text-center text-sm mt-4"}>
        <span>Already have an account?</span>{" "}
        <Link href={"/sign-in"} className={"underline"}>
          Login
        </Link>
      </p>
    </>
  );
}

export default SignInPage;
