import React, {
  useState
} from "react";

export default function Dropdown({
  items = [],
  onSelect
}) {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative">
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="rounded-lg border px-3 py-2"
      >
        Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-white shadow">
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onSelect?.(item);
                setOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-slate-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}