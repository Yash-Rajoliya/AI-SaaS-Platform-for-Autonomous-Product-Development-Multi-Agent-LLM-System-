import { useMemo } from "react";
import { useProjectStore } from "../state/project.store";

export function useWorkspace() {
  const project = useProjectStore((state) => state.project);
  const setProject = useProjectStore((state) => state.setProject);

  return useMemo(
    () => ({
      project,
      setProject,
    }),
    [project, setProject]
  );
}