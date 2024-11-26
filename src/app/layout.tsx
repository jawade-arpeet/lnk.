import React from "react";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import cn from "@/lib/utils/cn";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased", DMSans.className)}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
