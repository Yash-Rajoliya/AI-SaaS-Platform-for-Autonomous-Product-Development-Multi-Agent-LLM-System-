import { exec } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(exec);

export class NodeFailureExperiment {
  async terminatePod(namespace, labelSelector) {
    await run(
      `kubectl delete pod -n ${namespace} -l ${labelSelector}`
    );

    return {
      success: true,
      type: "node-failure",
      timestamp: new Date().toISOString(),
    };
  }

  async verifyRecovery(healthCheckFn) {
    const result = await healthCheckFn();

    return {
      recovered: result === true,
    };
  }
}