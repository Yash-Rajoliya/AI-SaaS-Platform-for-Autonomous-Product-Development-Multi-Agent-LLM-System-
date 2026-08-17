import React, {
  useEffect
} from "react";

export default function Toast({
  message,
  duration = 3000,
  onClose
}) {
  useEffect(() => {
    const timer = setTimeout(
      onClose,
      duration
    );

    return () =>
      clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-5 right-5 rounded-lg bg-slate-900 px-4 py-3 text-white shadow-xl">
      {message}
    </div>
  );
}