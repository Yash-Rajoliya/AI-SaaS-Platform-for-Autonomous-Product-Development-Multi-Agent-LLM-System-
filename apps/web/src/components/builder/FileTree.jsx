import React, { memo } from "react";

function TreeNode({ node, onSelect }) {
  return (
    <div className="ml-4">
      <button
        className="text-left w-full py-1 hover:bg-slate-100"
        onClick={() => onSelect(node)}
      >
        {node.type === "folder" ? "📁" : "📄"} {node.name}
      </button>

      {node.children?.map(child => (
        <TreeNode
          key={child.id}
          node={child}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function FileTree({ files, onSelect }) {
  return (
    <div className="overflow-auto">
      {files.map(node => (
        <TreeNode
          key={node.id}
          node={node}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default memo(FileTree);