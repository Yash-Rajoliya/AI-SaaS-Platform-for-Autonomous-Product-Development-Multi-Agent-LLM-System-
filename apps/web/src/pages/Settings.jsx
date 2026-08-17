import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] =
    useState({
      notifications: true,
      darkMode: true,
      telemetry: true
    });

  const update = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="space-y-6">
        {Object.entries(settings).map(
          ([key, value]) => (
            <div
              key={key}
              className="flex justify-between border rounded-lg p-4"
            >
              <span>{key}</span>

              <input
                type="checkbox"
                checked={value}
                onChange={() => update(key)}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}