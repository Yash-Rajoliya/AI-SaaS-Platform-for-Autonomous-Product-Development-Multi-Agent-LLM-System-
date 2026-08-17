import React from "react";
import {
  NavLink
} from "react-router-dom";

const navigation = [
  {
    label: "Dashboard",
    href: "/"
  },
  {
    label: "Projects",
    href: "/projects"
  },
  {
    label: "Agents",
    href: "/agents"
  },
  {
    label: "Executions",
    href: "/executions"
  },
  {
    label: "Deployments",
    href: "/deployments"
  },
  {
    label: "Observability",
    href: "/observability"
  },
  {
    label: "Governance",
    href: "/governance"
  }
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h2 className="font-bold text-xl">
          AI Platform
        </h2>
      </div>

      <nav className="flex-1 p-4">
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 mb-1 ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "hover:bg-slate-100"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}