import React from "react";
import Link from "next/link";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <header className={"px-6 py-4 lg:py-6 max-w-screen-lg mx-auto"}>
        <nav className={"flex items-center justify-between"}>
          <Link href={"/"} className={"text-2xl font-semibold"}>
            lnk.
          </Link>
        </nav>
      </header>
      <section className={"px-6 max-w-[500px] mx-auto"}>{children}</section>
    </main>
  );
}

export default AuthLayout;
