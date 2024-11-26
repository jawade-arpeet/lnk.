import React from "react";
import cn from "@/lib/utils/cn";

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full text-sm font-medium placeholder:font-normal text-black placeholder:text-stone-500 px-3 py-2 h-10 rounded-md border border-stone-300",
        className,
      )}
      {...props}
    />
  );
}

export default Input;
