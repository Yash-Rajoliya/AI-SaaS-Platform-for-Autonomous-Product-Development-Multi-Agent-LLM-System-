import React from "react";

export default function Tooltip({
  text,
  children
}) {
  return (
    <div className="group relative inline-block">
      {children}

      <div className="invisible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-slate-900 px-2 py-1 text-xs text-white group-hover:visible">
        {text}
      </div>
    </div>
  );
}