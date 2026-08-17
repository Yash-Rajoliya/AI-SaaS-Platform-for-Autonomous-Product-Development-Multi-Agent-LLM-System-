import React from "react";
import clsx from "clsx";

const variants = {
  success:
    "bg-green-100 text-green-700",
  warning:
    "bg-yellow-100 text-yellow-700",
  error:
    "bg-red-100 text-red-700",
  info:
    "bg-blue-100 text-blue-700"
};

export default function Badge({
  variant = "info",
  children
}) {
  return (
    <span
      className={clsx(
        "rounded-full px-2 py-1 text-xs font-medium",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}