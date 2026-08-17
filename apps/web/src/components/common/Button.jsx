import React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-indigo-600 hover:bg-indigo-700 text-white",
  secondary:
    "bg-slate-200 hover:bg-slate-300 text-slate-900",
  danger:
    "bg-red-600 hover:bg-red-700 text-white",
  ghost:
    "bg-transparent hover:bg-slate-100 text-slate-700"
};

export const Button = React.forwardRef(
  (
    {
      variant = "primary",
      loading = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={loading || props.disabled}
        className={clsx(
          "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition",
          variants[variant],
          className
        )}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;