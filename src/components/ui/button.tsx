import React from "react";
import cn from "@/lib/utils/cn";

function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-block px-4 py-2 h-10 rounded-full text-sm font-medium bg-primary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
