import React, {
  memo
} from "react";

import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";

const variants = {
  healthy: "success",
  degraded: "warning",
  failed: "error"
};

function DeploymentStatus({
  deployments = []
}) {
  return (
    <Card>
      <h3 className="mb-4 font-semibold">
        Deployments
      </h3>

      <div className="space-y-3">
        {deployments.map((deployment) => (
          <div
            key={deployment.id}
            className="flex items-center justify-between"
          >
            <div>
              <div className="font-medium">
                {deployment.name}
              </div>

              <div className="text-xs text-slate-500">
                Version {deployment.version}
              </div>
            </div>

            <Badge
              variant={
                variants[
                  deployment.status
                ]
              }
            >
              {deployment.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default memo(
  DeploymentStatus
);