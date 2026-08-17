import React, {
  useState
} from "react";

export default function Tabs({
  tabs
}) {
  const [active, setActive] =
    useState(0);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() =>
              setActive(index)
            }
            className={`px-4 py-2 ${
              active === index
                ? "border-b-2 border-indigo-600"
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-4">
        {tabs[active]?.content}
      </div>
    </div>
  );
}