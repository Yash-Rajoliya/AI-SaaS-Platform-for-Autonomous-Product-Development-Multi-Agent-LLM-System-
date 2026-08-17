import React from "react";

export default function PreviewPane({
  url
}) {
  return (
    <iframe
      title="preview"
      src={url}
      className="h-full w-full border-0"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}