import Link from "next/link";
import Button from "@/components/ui/button";

function HomePage() {
  return (
    <main>
      <header className={"px-6 py-4 lg:py-6 max-w-screen-lg mx-auto"}>
        <nav className={"flex items-center justify-between"}>
          <Link href={"/"} className={"text-2xl font-semibold"}>
            lnk.
          </Link>
          <Link href={"/sign-up"} passHref={true}>
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>
      <section
        className={
          "px-6 flex flex-col items-center gap-y-2 lg:gap-y-2.5 mt-20 mx-auto sm:max-w-screen-sm lg:max-w-screen-md"
        }
      >
        <h1
          className={
            "text-center text-6xl lg:text-7xl font-semibold tracking-tight"
          }
        >
          Everything you are. In one, simple link in bio.
        </h1>
        <p className={"text-center font-medium text-sm md:text-base"}>
          Join thousands of people using lnk. for their link in bio. One link to
          help you share everything you create, curate and sell from your
          Instagram, TikTok, Twitter, YouTube and other social media profiles.
        </p>
        <Link href={"/sign-up"} passHref={true} className={"mt-1"}>
          <Button>Get Started</Button>
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
